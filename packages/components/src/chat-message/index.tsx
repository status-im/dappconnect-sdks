import { Stack } from '@tamagui/core'

import { ChatMessage } from './chat-message'

import type { GetProps } from '@tamagui/core'

export * from './chat-message'

type BaseProps = GetProps<typeof Stack>

export const Messages = (props: BaseProps) => {
  return (
    <Stack {...props}>
      <ChatMessage text="fsdjkf kasldjf ksdlfjksdlfj asdklfj sdkljf" />
      <ChatMessage text="fsdjkf kasldjf ksdlfjksdlfj asdklfj sdkljf" />
      <ChatMessage text="fsdjkf kasldjf ksdlfjksdlfj asdklfj sdkljf" />
      <ChatMessage
        images={[
          {
            url: 'https://images.unsplash.com/photo-1673433107234-14d1a4424658?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
          },
        ]}
      />
      <ChatMessage text="fsdjkf kasldjf ksdlfjksdlfj asdklfj sdkljf" />
      <ChatMessage text="fsdjkf kasldjf ksdlfjksdlfj asdklfj sdkljf" />
      <ChatMessage text="fsdjkf kasldjf ksdlfjksdlfj asdklfj sdkljf" />
      <ChatMessage text="fsdjkf kasldjf ksdlfjksdlfj asdklfj sdkljf" />
      <ChatMessage text="fsdjkf kasldjf ksdlfjksdlfj asdklfj sdkljf" />
      <ChatMessage text="fsdjkf kasldjf ksdlfjksdlfj asdklfj sdkljf" />
    </Stack>
  )
}
