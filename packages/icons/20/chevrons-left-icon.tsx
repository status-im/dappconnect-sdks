import { Path, Svg } from 'react-native-svg'
import { useCurrentColor } from 'tamagui'

import type { SvgProps } from 'react-native-svg'

const SvgChevronsLeftIcon = (props: SvgProps) => {
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
      <Path d="m10 6-4 4 4 4M14 6l-4 4 4 4" stroke={color} strokeWidth={1.3} />
    </Svg>
  )
}
export default SvgChevronsLeftIcon
