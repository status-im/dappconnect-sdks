import {
  Children,
  cloneElement,
  forwardRef,
  isValidElement,
  useEffect,
  useRef,
  useState,
} from 'react'

import { cva, cx } from 'cva'

import type { ReactElement, ReactNode } from 'react'

const tabContainerStyles = cva({
  base: 'relative flex flex-1 items-center justify-center gap-0.5 rounded-10 p-0.5',
  variants: {
    type: {
      grey: 'bg-neutral-10 blur:bg-neutral-80/5 blur:backdrop-blur-[20px] dark:bg-neutral-80 blur:dark:bg-white-5',
      'dark-grey': 'bg-neutral-20 dark:bg-neutral-90',
    },
    size: {
      '24': 'h-6',
      '32': 'h-8',
    },
  },
})

const activeTabStyles = cva({
  base: 'absolute left-0 flex-1 rounded-8 transition-all duration-300 ease-out',
  variants: {
    type: {
      grey: 'bg-neutral-50 blur:bg-neutral-80/60 dark:bg-neutral-60 blur:dark:bg-white-20',
      'dark-grey': 'bg-neutral-50 dark:bg-neutral-60',
    },
    size: {
      '24': 'h-[22px]',
      '32': 'h-7',
    },
  },
})

const segmentStyles = cva({
  base: 'relative z-10 flex flex-1 select-none items-center justify-center whitespace-nowrap rounded-8 font-medium transition-all duration-300 ease-out',

  variants: {
    active: {
      true: 'text-white-100',
      false: 'bg-transparent text-neutral-100 dark:text-white-100',
    },
    type: {
      grey: '',
      'dark-grey': '',
    },
    variant: {
      default: '',
      emoji: 'gap-1',
      'emoji-only': '',
      icon: 'gap-1',
      'icon-only': '',
    },
    size: {
      '24': 'h-[22px] text-13',
      '32': 'h-7 text-15',
    },
  },
  compoundVariants: [
    {
      type: 'grey',
      active: false,
      className:
        'hover:bg-neutral-20 blur:hover:bg-neutral-80/5 dark:hover:bg-neutral-70 dark:blur:hover:bg-white-5',
    },
    {
      type: 'dark-grey',
      active: false,
      className: 'hover:bg-neutral-30 dark:hover:bg-neutral-80',
    },
    {
      variant: 'default',
      size: '24',
      className: 'px-2',
    },
    {
      variant: 'default',
      size: '32',
      className: 'px-3',
    },
    {
      variant: 'emoji',
      size: '24',
      className: 'pl-[6px] pr-2',
    },
    {
      variant: 'emoji',
      size: '32',
      className: 'pl-[10px] pr-3',
    },
    {
      variant: 'emoji-only',
      size: '24',
      className: 'px-1',
    },
    {
      variant: 'emoji-only',
      size: '32',
      className: 'px-1.5',
    },
    {
      variant: 'icon',
      size: '24',
      className: 'pl-[6px] pr-2',
    },
    {
      variant: 'icon',
      size: '32',
      className: 'pl-[10px] pr-3',
    },
    {
      variant: 'icon-only',
      size: '24',
      className: 'px-1',
    },
    {
      variant: 'icon-only',
      size: '32',
      className: 'px-1.5',
    },
  ],
})

type SegmentButtonProps = {
  children?: ReactNode
  value?: string | number
  onClick?: () => void
  active?: boolean
  size?: '24' | '32'
  type?: 'grey' | 'dark-grey'
}

const Button = forwardRef<HTMLButtonElement, SegmentButtonProps>(
  ({ children, onClick, active, size = '32', type = 'grey' }, ref) => (
    <button
      ref={ref}
      onClick={onClick}
      className={segmentStyles({ active, variant: 'default', size, type })}
    >
      {children}
    </button>
  ),
)

Button.displayName = 'Button'

const IconButton = forwardRef<
  HTMLButtonElement,
  SegmentButtonProps & {
    icon: ReactNode
    value?: string | number
    type?: 'grey' | 'dark-grey'
  }
>(
  (
    { icon, children, value, onClick, active, size = '32', type = 'grey' },
    ref,
  ) => {
    const iconWithColor = cloneElement(icon as ReactElement, {
      className: cx([
        'size-5 text-neutral-50 dark:text-white-40',
        active && '!text-white-100',
      ]),
    })

    return (
      <button
        ref={ref}
        onClick={onClick}
        className={segmentStyles({
          active,
          variant: children ? 'icon' : 'icon-only',
          size,
          type,
        })}
        value={value}
      >
        {iconWithColor}
        {children}
      </button>
    )
  },
)

IconButton.displayName = 'IconButton'

const EmojiButton = forwardRef<
  HTMLButtonElement,
  SegmentButtonProps & {
    emoji: string
    value?: string | number
    type?: 'grey' | 'dark-grey'
  }
>(
  (
    { children, emoji, onClick, active, size = '32', value, type = 'grey' },
    ref,
  ) => (
    <button
      ref={ref}
      onClick={onClick}
      className={segmentStyles({
        active,
        variant: children ? 'emoji' : 'emoji-only',
        size,
        type,
      })}
      value={value}
    >
      {emoji} {children}
    </button>
  ),
)

EmojiButton.displayName = 'EmojiButton'

type Props<T> = {
  children: ReactNode
  activeSegment: T
  onSegmentChange: (value: T) => void
  size?: '24' | '32'
  type?: 'grey' | 'dark-grey'
}

const SegmentedControl = <T extends string | number>(props: Props<T>) => {
  const {
    children,
    activeSegment,
    onSegmentChange,
    size = '32',
    type = 'grey',
  } = props

  const [indicatorStyle, setIndicatorStyle] = useState<React.CSSProperties>({})
  const segmentRefs = useRef<(HTMLButtonElement | null)[]>([])

  useEffect(() => {
    const activeSegmentIndex = Children.toArray(children).findIndex(
      child =>
        isValidElement(child) &&
        (child.props.value
          ? child.props.value === activeSegment
          : child.props.children === activeSegment),
    )

    const activeSegmentRef = segmentRefs.current[activeSegmentIndex]
    if (activeSegmentRef) {
      setIndicatorStyle({
        width: `${activeSegmentRef.offsetWidth}px`,
        transform: `translateX(${activeSegmentRef.offsetLeft}px)`,
      })
    }
  }, [activeSegment, children])

  const clonedChildren = Children.map(
    children,
    (child, index) =>
      isValidElement(child) &&
      cloneElement(child, {
        ...child.props,
        onClick: () =>
          onSegmentChange(child.props.value || child.props.children),
        active: child.props.value
          ? child.props.value === activeSegment
          : child.props.children === activeSegment,
        ref: (el: HTMLButtonElement) => (segmentRefs.current[index] = el),
        size,
        type,
      }),
  )

  return (
    <div className={tabContainerStyles({ size, type })}>
      <div className={activeTabStyles({ size, type })} style={indicatorStyle} />
      {clonedChildren}
    </div>
  )
}

SegmentedControl.Root = SegmentedControl
SegmentedControl.Button = Button
SegmentedControl.IconButton = IconButton
SegmentedControl.EmojiButton = EmojiButton

export { SegmentedControl }
