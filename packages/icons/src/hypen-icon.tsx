import { createIcon } from '../lib/create-icon'

const SvgHypenIcon = createIcon(props => {
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
      <path stroke={props.color} strokeWidth={1.2} d="M6 10h8" />
    </svg>
  )
})

export default SvgHypenIcon
