// import { useCallback, useEffect, useState } from 'react'

import { Divider, IconButton, Paragraph } from '@status-im/components'
import {
  ArrowLeftIcon,
  LockedIcon,
  MembersIcon,
  OptionsIcon,
} from '@status-im/icons/20'
import { Stack } from '@tamagui/core'

import type { GetProps, StackProps } from '@tamagui/core'

type BaseProps = GetProps<typeof Stack>

type Props = {
  membersVisisble: boolean
  onMembersPress: () => void
  goBack?: () => void
  title?: string
  description?: string
  icon?: React.ReactNode
  refForScroll?: React.RefObject<HTMLDivElement>
  backgroundColor?: StackProps['backgroundColor']
} & BaseProps

const Topbar = (props: Props) => {
  const {
    membersVisisble,
    onMembersPress,
    goBack,
    title,
    description,
    icon,
    backgroundColor,
    ...rest
  } = props

  return (
    <Stack
      flexDirection="row"
      height={56}
      alignItems="center"
      justifyContent="space-between"
      padding={16}
      backgroundColor={backgroundColor || '$background'}
      borderBottomWidth={1}
      borderColor="$neutral-10"
      width="100%"
      {...rest}
    >
      <Stack flexDirection="row" alignItems="center" flexWrap="wrap">
        <Stack mr={12} $gtSm={{ display: 'none' }}>
          <IconButton icon={<ArrowLeftIcon />} onPress={() => goBack?.()} />
        </Stack>

        {icon && <Stack marginRight={12}>{icon}</Stack>}

        {title && (
          <Paragraph weight="semibold" marginRight={4}>
            {title}
          </Paragraph>
        )}

        <LockedIcon color="$neutral-80-opa-40" />
        <Divider height={16} $sm={{ display: 'none' }} />
        {description && (
          <Paragraph
            weight="medium"
            color="$neutral-80-opa-50"
            variant="smaller"
            $sm={{ display: 'none' }}
          >
            {description}
          </Paragraph>
        )}
      </Stack>

      <Stack space={12} flexDirection="row">
        <Stack $sm={{ display: 'none' }}>
          <IconButton
            icon={<MembersIcon />}
            selected={membersVisisble}
            onPress={onMembersPress}
          />
        </Stack>
        <IconButton icon={<OptionsIcon />} />
      </Stack>
    </Stack>
  )
}

export { Topbar }
