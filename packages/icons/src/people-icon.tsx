import { createIcon } from '../lib/create-icon'

const SvgPeopleIcon = createIcon(props => {
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
        stroke={props.color}
        strokeWidth={1.2}
        d="M2.5 11c0 2.157 1.034 3.797 1.615 4.548.11.143.165.214.437.434.273.22.336.25.463.312C6.486 17 8.657 17 14 17c0 0 4 0 4-3.5C18 9 13 9 11.5 12c-2.5-2-4.167-.333-5 .5 0 0-1-2-1-4 0-1.22.559-2.069.994-2.544.124-.136.186-.203.349-.286.061-.03.189-.075.256-.088.18-.036.311-.014.574.03l.278.046c.632.106.948.158 1.184.079a1 1 0 0 0 .622-.608c.085-.234.04-.552-.05-1.186-.067-.462-.1-.694-.204-.867a1 1 0 0 0-.563-.441c-.193-.06-.426-.036-.89.01l-1.135.114c-1.188.118-1.782.178-2.246.551-.463.374-.636.908-.983 1.976C3.133 6.993 2.5 9.313 2.5 11Z"
      />
    </svg>
  )
})

export default SvgPeopleIcon
