import { createIcon } from '../lib/create-icon'

const SvgChileIcon = createIcon(props => {
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
      <g clipPath="url(#chile-icon_svg__a)">
        <g clipPath="url(#chile-icon_svg__b)">
          <path
            fill="#1F429B"
            d="M7.222 2.778h-5A2.222 2.222 0 0 0 0 5v5h7.222V2.778ZM4.632 7.94l-1.046-.76-1.045.76.399-1.229-1.046-.76h1.293l.4-1.229.399 1.23h1.292l-1.046.76.4 1.228Z"
          />
          <path
            fill="#EEE"
            d="M17.778 2.778H7.222V10H20V5a2.222 2.222 0 0 0-2.222-2.222Z"
          />
          <path
            fill="#D42D27"
            d="M0 10v5c0 1.227.995 2.222 2.222 2.222h15.556A2.222 2.222 0 0 0 20 15v-5H0Z"
          />
          <path
            fill="#fff"
            d="m3.986 5.951-.4-1.229-.4 1.23h-1.29l1.045.76-.4 1.228 1.046-.76 1.046.76-.4-1.229 1.046-.76H3.986Z"
          />
        </g>
      </g>
      <defs>
        <clipPath id="chile-icon_svg__a">
          <path fill="#fff" d="M0 0h20v20H0z" />
        </clipPath>
        <clipPath id="chile-icon_svg__b">
          <path fill="#fff" d="M0 0h20v20H0z" />
        </clipPath>
      </defs>
    </svg>
  )
})

export default SvgChileIcon
