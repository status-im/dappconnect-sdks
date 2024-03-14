import { createIcon } from '../lib/create-icon'

const SvgRevertIcon = createIcon(props => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width={props.width}
      height={props.height}
      fill="none"
      viewBox="0 0 20 20"
      focusable={false}
      aria-hidden={true}
    >
      <path
        fill={props.color}
        fillRule="evenodd"
        d="M7.598 4.087a6.336 6.336 0 0 1 4.083-.27 6.365 6.365 0 0 1 3.403 2.286 6.422 6.422 0 0 1 0 7.794 6.365 6.365 0 0 1-3.403 2.285 6.335 6.335 0 0 1-4.083-.269 6.377 6.377 0 0 1-3.078-2.712l-1.04.598a7.577 7.577 0 0 0 3.657 3.222c1.54.64 3.246.753 4.856.32a7.565 7.565 0 0 0 4.044-2.716 7.622 7.622 0 0 0 0-9.25 7.565 7.565 0 0 0-4.044-2.716 7.536 7.536 0 0 0-4.856.32A7.57 7.57 0 0 0 4.1 5.284V3.5H2.9v4.1H7V6.4H4.77a6.374 6.374 0 0 1 2.828-2.313Z"
        clipRule="evenodd"
      />
    </svg>
  )
})

export default SvgRevertIcon
