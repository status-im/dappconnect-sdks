import { Circle, Svg } from 'react-native-svg'
import { useCurrentColor } from 'tamagui'

import type { SvgProps } from 'react-native-svg'

const SvgOptions = (props: SvgProps) => {
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
      <Circle cx={4.5} cy={10} r={1.5} fill="#0D1625" />
      <Circle cx={10} cy={10} r={1.5} fill="#0D1625" />
      <Circle cx={15.5} cy={10} r={1.5} fill="#0D1625" />
    </Svg>
  )
}
export default SvgOptions
