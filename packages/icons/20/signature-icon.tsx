import { Path, Svg } from 'react-native-svg'
import { useCurrentColor } from 'tamagui'

import type { SvgProps } from 'react-native-svg'

const SvgSignatureIcon = (props: SvgProps) => {
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
        d="M8.594 10.666a16.591 16.591 0 0 1 2.045-1.992c.042.183.045.39.004.531-.1.252-.158.526-.195.776v-.543l-.832.74c-.38.339-.745.725-1.095 1.106a1.267 1.267 0 0 1-.016-.337c.015-.157.059-.246.09-.282l-.379-.327.378.328Zm1.839.057v-.002l.62-.147c.66-.157 1.202-.55 1.706-1.177a.585.585 0 0 0 .402.285.78.78 0 0 0 .393-.035c.177-.059.363-.17.511-.268a7.43 7.43 0 0 0 .41-.294 1.146 1.146 0 0 1 .028.171c.012.093.018.138.018.188v.257l-.582.405c-.269.188-.466.31-.622.351-.066.017-.092.01-.098.009-.003-.001-.031-.01-.08-.073l-.377-.497-.403.477c-.62.734-1.237 1.027-1.86 1.01a.5.5 0 0 1-.015-.039 1.629 1.629 0 0 1-.054-.582V10.736l.003-.013Zm4.284-.298-.094-.508.362.026c.354.025.71-.076.984-.167.114-.038.213-.073.302-.105l.21-.073c.01.064.019.145.019.24 0 .178-.03.347-.073.462a.526.526 0 0 1-.03.066c-.16.038-.319.085-.466.127l-.007.002c-.172.051-.33.097-.486.133-.263.06-.473.08-.649.048a1.156 1.156 0 0 1-.072-.25Zm1.719-.973.001.002a.015.015 0 0 1-.001-.002Zm-.055.938.003-.003a.016.016 0 0 1-.003.003Z"
        fill={color}
        stroke={color}
      />
      <Path
        d="M17.63 14.304H6.004a42.16 42.16 0 0 1 1.854-4.526c.203-.438.426-.876.648-1.314 1.391-1.241 2.689-2.774 3.82-4.891.296-.584.055-1.533-.334-1.57-.927-.073-1.632 1.059-2.317 2.117A34.365 34.365 0 0 0 7.97 6.968c-1.428 1.24-2.967 2.117-4.468 2.956-.575.329-.334 2.08.24 1.752a33.703 33.703 0 0 0 2.763-1.68 57.38 57.38 0 0 0-1.613 4.272H2.371c-.204 0-.371.328-.371.73 0 .401.167.73.37.73h2.077c-.093.292-.185.584-.278.912-.296 1.022.5 1.935.797.913.167-.62.353-1.205.557-1.825h12.106c.204 0 .371-.329.371-.73 0-.365-.167-.694-.37-.694Z"
        fill={color}
      />
    </Svg>
  )
}
export default SvgSignatureIcon
