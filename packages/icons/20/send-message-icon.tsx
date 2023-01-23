import { Path, Svg } from 'react-native-svg'
import { useCurrentColor } from 'tamagui'

import type { SvgProps } from 'react-native-svg'

const SvgSendMessageIcon = (props: SvgProps) => {
  const { color: colorToken = 'currentColor', ...rest } = props
  const color = useCurrentColor(colorToken)
  return (
    <Svg
      width={20}
      height={20}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.187 3.6a1.65 1.65 0 0 0-1.24-.73c-.378-.031-.722.122-1.01.281-.293.163-.649.404-1.073.692l-.027.018-6.893 4.677-.026.018c-.627.426-1.132.768-1.487 1.054a3.476 3.476 0 0 0-.48.452 1.372 1.372 0 0 0-.31.593 1.65 1.65 0 0 0 .473 1.537c.178.17.393.262.588.317.197.055.419.085.651.104.455.037 1.065.037 1.823.037h2.947l1.29 2.258.017.028c.367.644.664 1.163.918 1.533.13.19.264.364.408.506.144.141.328.28.561.35a1.65 1.65 0 0 0 1.564-.34c.183-.16.292-.363.364-.552.073-.189.123-.404.162-.63.077-.442.131-1.037.198-1.776l.003-.031.734-8.07.002-.031c.047-.511.086-.939.086-1.274 0-.33-.033-.705-.243-1.02Zm-2.36 1.161-.26.175-6.893 4.678c-.659.447-1.12.76-1.429 1.01a2.24 2.24 0 0 0-.3.276.456.456 0 0 0-.036.047.35.35 0 0 0 .09.291c.01.004.027.011.055.02.081.022.208.044.404.06.396.032.953.032 1.75.032H9.12l3.706-6.589Zm-2.58 7.236 1.296 2.266c.387.678.657 1.15.877 1.471.109.159.189.256.247.313.02.02.035.032.043.038a.35.35 0 0 0 .298-.065.44.44 0 0 0 .024-.052c.029-.076.061-.198.094-.387.067-.383.117-.925.187-1.703l.734-8.07c.024-.26.044-.48.058-.668l-3.857 6.857Z"
        fill={color}
      />
    </Svg>
  )
}
export default SvgSendMessageIcon
