import { Circle, Path, Svg } from 'react-native-svg'
import { useCurrentColor } from 'tamagui'

import type { SvgProps } from 'react-native-svg'

const SvgPullupIcon = (props: SvgProps) => {
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
      <Circle
        cx={10}
        cy={10}
        r={7}
        transform="rotate(180 10 10)"
        fill="#E7EAEE"
      />
      <Path d="m13 11.5-3-3-3 3" stroke={color} strokeWidth={1.3} />
    </Svg>
  )
}
export default SvgPullupIcon
