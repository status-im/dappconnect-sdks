import { AddUserIcon } from '@status-im/icons'
import { Stack } from 'tamagui'

import { Avatar, IconAvatar } from '../../avatar'
import { Text } from '../../text'

import type { SystemMessageState, User } from '../system-message'

type Props = {
  timestamp: string
  user: User
  users: Array<User>
  state: SystemMessageState
}

const AddedUsersMessageContent = (props: Props) => {
  const { user, users, timestamp, state } = props

  return (
    <>
      <IconAvatar
        backgroundColor={state === 'landed' ? '$transparent' : '$blue-50-opa-5'}
        color="$blue-50"
      >
        <AddUserIcon size={20} />
      </IconAvatar>
      <Stack flexDirection="row" gap={2} flexBasis="max-content" flexGrow={1}>
        <Stack flexDirection="row" gap={4} alignItems="center" flexGrow={1}>
          <Avatar type="user" size={16} src={user.src} />
          <Text size={13} weight="semibold">
            {user.name}
          </Text>
          <Text size={13}>added </Text>
          {users.length === 1 && (
            <Stack flexDirection="row" gap={4} alignItems="center">
              <Avatar type="user" size={16} src={users[0].src} />
              <Text size={13} weight="semibold">
                {users[0].name}
              </Text>
              <Text size={11} color="$neutral-50">
                {timestamp}
              </Text>
            </Stack>
          )}
          {users.length > 1 && (
            <Stack
              flexDirection="row"
              flexGrow={1}
              flexBasis="max-content"
              justifyContent="space-between"
            >
              <Stack flexDirection="row" gap={4} alignItems="center">
                {users.map((user, i) => {
                  return (
                    <>
                      <Text size={13}>
                        {users.length === i + 1 ? ' and ' : null}
                      </Text>
                      <Avatar type="user" size={16} src={user.src} />
                      <Text size={13} weight="semibold">
                        {user.name}
                      </Text>
                    </>
                  )
                })}
              </Stack>
              <Text size={11} color="$neutral-50">
                {timestamp}
              </Text>
            </Stack>
          )}
        </Stack>
      </Stack>
    </>
  )
}

export { AddedUsersMessageContent }
