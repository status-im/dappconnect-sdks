import { hexToBytes } from 'ethereum-cryptography/utils'
import { PageDirection } from 'js-waku'

import { ChatMessage as ChatMessageProto } from '~/protos/chat-message'
import { CommunityRequestToJoin } from '~/protos/communities'
import { EmojiReaction } from '~/protos/emoji-reaction'

import { idToContentTopic } from '../contentTopic'
import { createSymKeyFromPassword } from '../encryption'
import { getReactions } from './community/get-reactions'

import type { MessageType } from '../../protos/enums'
import type { Client } from '../client'
import type { Community } from './community/community'
import type { Reactions } from './community/get-reactions'
import type { ImageMessage } from '~/src/proto/communities/v1/chat_message'
import type { CommunityChat } from '~/src/proto/communities/v1/communities'
import type { WakuMessage } from 'js-waku'

export type ChatMessage = ChatMessageProto & {
  messageId: string
  pinned: boolean
  reactions: Reactions
  chatUuid: string
  responseToMessage?: Omit<ChatMessage, 'responseToMessage'>
}

// todo?: add clock
export class Chat {
  // todo?: add whole community reference
  private readonly community: Community
  private readonly client: Client

  public readonly uuid: string
  public readonly id: string
  public readonly contentTopic: string
  public readonly type: MessageType.COMMUNITY_CHAT
  public readonly symetricKey: Uint8Array
  public description: CommunityChat
  public readonly chatCallbacks: Set<(description: CommunityChat) => void>
  // todo!: use Map
  public messages: ChatMessage[]
  public readonly messageCallbacks: Set<(messages: ChatMessage[]) => void>

  constructor(
    community: Community,
    client: Client,
    uuid: string,
    id: string,
    contentTopic: string,
    type: MessageType.COMMUNITY_CHAT,
    symetricKey: Uint8Array,
    // todo?: rename to chat (and access via chat.chat)
    description: CommunityChat
  ) {
    this.client = client
    this.community = community

    this.uuid = uuid
    this.id = id
    this.contentTopic = contentTopic
    this.type = type
    this.symetricKey = symetricKey
    this.description = description

    this.chatCallbacks = new Set()
    this.messages = []
    this.messageCallbacks = new Set()
  }

  public static create = async (
    community: Community,
    client: Client,
    uuid: string,
    type: MessageType.COMMUNITY_CHAT,
    description: CommunityChat
  ) => {
    const id = `${community.publicKey}${uuid}`
    const contentTopic = idToContentTopic(id)
    const symetricKey = await createSymKeyFromPassword(id)

    return new Chat(
      community,
      client,
      uuid,
      id,
      contentTopic,
      type,
      symetricKey,
      description
    )
  }

  public getMessages = () => {
    return this.messages
  }

  // todo?: rename to onMetadata/Info/Params/Description/Context/Props/Detail/Proto/Change/Update
  public onChange = (callback: (description: CommunityChat) => void) => {
    this.chatCallbacks.add(callback)

    return () => {
      this.chatCallbacks.delete(callback)
    }
  }

  public emitChange = (description: CommunityChat) => {
    this.chatCallbacks.forEach(callback => callback(description))
  }

  public onMessage = (
    callback: (messages: ChatMessage[]) => void
  ): (() => void) => {
    this.messageCallbacks.add(callback)

    return () => {
      this.messageCallbacks.delete(callback)
    }
  }

  public fetchMessages = async (
    options: { start: Date },
    callback: (messages: ChatMessage[]) => void
  ) => {
    const startTime = options.start
    const endTime = new Date()

    let _oldestMessageTime: Date | undefined = undefined

    if (this.messages.length) {
      _oldestMessageTime = new Date(Number(this.messages[0].timestamp))

      if (_oldestMessageTime <= options.start) {
        callback(this.messages)

        return
      }
    }

    await this.client.waku.store.queryHistory([this.contentTopic], {
      timeFilter: {
        startTime: startTime,
        endTime: endTime,
      },
      pageSize: 50,
      // most recent page first
      pageDirection: PageDirection.BACKWARD,
      decryptionKeys: [this.symetricKey],
      callback: (wakuMessages: WakuMessage[]) => {
        // oldest message first
        for (const wakuMessage of wakuMessages) {
          this.client.handleWakuMessage(wakuMessage)
        }
      },
    })

    // callback
    // todo: use clock
    if (
      _oldestMessageTime &&
      this.messages.length &&
      _oldestMessageTime >= new Date(Number(this.messages[0].timestamp))
    ) {
      callback([])

      return
    }

    this.emitMessages(this.messages)
  }

  public emitMessages = (messages: ChatMessage[]) => {
    // fixme!: don't emit on backfill
    this.messageCallbacks.forEach(callback => callback(messages))
  }

  public handleChange = (description: CommunityChat) => {
    // state
    this.description = description

    // callback
    this.emitChange(description)
  }

  public handleNewMessage = (message: ChatMessage) => {
    // todo: move to func
    let messageIndex = this.messages.length
    while (messageIndex > 0) {
      const _message = this.messages[messageIndex - 1]

      if (_message.clock <= message.clock) {
        break
      }

      messageIndex--
    }

    // todo: move to func
    let responseToMessageIndex = this.messages.length
    while (--responseToMessageIndex >= 0) {
      const _message = this.messages[responseToMessageIndex]

      if (_message.messageId === message.responseTo) {
        break
      }
    }

    if (responseToMessageIndex >= 0) {
      message.responseToMessage = this.messages[responseToMessageIndex]
    }

    // state
    this.messages.splice(messageIndex, 0, message)

    // callback
    this.emitMessages(this.messages)
  }

  public handleEditedMessage = (messageId: string, text: string) => {
    let messageIndex = this.messages.length
    while (--messageIndex >= 0) {
      const _message = this.messages[messageIndex]

      if (_message.messageId === messageId) {
        break
      }
    }

    // original not found
    if (messageIndex < 0) {
      return
    }

    this.messages[messageIndex] = {
      ...this.messages[messageIndex],
      text,
    }

    // callback
    this.emitMessages(this.messages)
  }

  // fixme!: delete all references (e.g. in replies)
  // todo?: replace deleted message with partial object
  public handleDeletedMessage = (messageId: string) => {
    let messageIndex = this.messages.length
    while (--messageIndex >= 0) {
      const _message = this.messages[messageIndex]

      if (_message.messageId === messageId) {
        break
      }
    }

    if (messageIndex < 0) {
      return
    }

    this.messages.splice(messageIndex, 1)

    this.emitMessages(this.messages)
  }

  public handlePinnedMessage = (messageId: string, pinned?: boolean) => {
    let messageIndex = this.messages.length
    while (--messageIndex >= 0) {
      const _message = this.messages[messageIndex]

      if (_message.messageId === messageId) {
        break
      }
    }

    if (messageIndex < 0) {
      return
    }

    this.messages[messageIndex].pinned = Boolean(pinned)

    this.emitMessages(this.messages)
  }

  public handleEmojiReaction = (
    messageId: string,
    reaction: EmojiReaction,
    isMe: boolean
  ) => {
    let messageIndex = this.messages.length
    while (--messageIndex >= 0) {
      const _message = this.messages[messageIndex]

      if (_message.messageId === messageId) {
        break
      }
    }

    if (messageIndex < 0) {
      return
    }

    this.messages[messageIndex].reactions = getReactions(
      reaction,
      this.messages[messageIndex].reactions,
      isMe
    )

    this.emitMessages(this.messages)
  }

  public sendTextMessage = async (text: string, responseTo?: string) => {
    // TODO: protos does not support optional fields :-(
    const payload = ChatMessageProto.encode({
      clock: BigInt(Date.now()),
      timestamp: BigInt(Date.now()),
      text,
      responseTo: responseTo ?? '',
      ensName: '',
      chatId: this.id,
      messageType: 'COMMUNITY_CHAT',
      contentType: ChatMessageProto.ContentType.TEXT_PLAIN,
      sticker: { hash: '', pack: 0 },
      image: {
        type: 'JPEG',
        payload: new Uint8Array([]),
      },
      audio: {
        type: 'AAC',
        payload: new Uint8Array([]),
        durationMs: BigInt(0),
      },
      community: new Uint8Array([]),
      grant: new Uint8Array([]),
      displayName: '',
    })

    await this.client.sendWakuMessage(
      'TYPE_CHAT_MESSAGE',
      payload,
      this.contentTopic,
      this.symetricKey
    )
  }

  public sendImageMessage = async (image: ImageMessage) => {
    const payload = ChatMessageProto.encode({
      clock: BigInt(Date.now()),
      timestamp: BigInt(Date.now()),
      text: '',
      responseTo: '',
      ensName: '',
      chatId: this.id,
      messageType: 'COMMUNITY_CHAT',
      contentType: ChatMessageProto.ContentType.TEXT_PLAIN,
      sticker: { hash: '', pack: 0 },
      image: {
        type: image.type,
        payload: image.payload,
      },
      audio: {
        type: 'AAC',
        payload: new Uint8Array([]),
        durationMs: BigInt(0),
      },
      community: new Uint8Array([]),
      grant: new Uint8Array([]),
      displayName: '',
    })

    await this.client.sendWakuMessage(
      'TYPE_CHAT_MESSAGE',
      payload,
      this.contentTopic,
      this.symetricKey
    )
  }

  public sendReaction = async (
    chatId: string,
    messageId: string,
    reaction: EmojiReaction.Type
  ) => {
    const payload = EmojiReaction.encode({
      clock: BigInt(Date.now()),
      chatId: chatId,
      messageType: 'COMMUNITY_CHAT',
      grant: new Uint8Array([]),
      messageId,
      retracted: false,
      type: reaction,
    })

    await this.client.sendWakuMessage(
      'TYPE_EMOJI_REACTION',
      payload,
      this.contentTopic,
      this.symetricKey
    )
  }

  public requestToJoin = async () => {
    const payload = CommunityRequestToJoin.encode({
      clock: BigInt(Date.now()),
      chatId: this.id,
      communityId: hexToBytes(this.community.publicKey.replace(/^0[xX]/, '')),
      ensName: '',
    })

    await this.client.sendWakuMessage(
      'TYPE_COMMUNITY_REQUEST_TO_JOIN',
      payload,
      this.contentTopic,
      this.symetricKey
    )
  }
}
