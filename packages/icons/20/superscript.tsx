import { Path, Svg } from 'react-native-svg'
import { useCurrentColor } from 'tamagui'

import type { SvgProps } from 'react-native-svg'

const SvgSuperscript = (props: SvgProps) => {
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
        d="M16.885 7.785c.071-.016.142-.03.213-.042.13-.022.253-.033.369-.033h1.432c.131 0 .24.037.316.12m-2.33-.045 2.294.079m-2.294-.079 1.09-1.11c.154-.16.304-.318.448-.473.146-.162.276-.327.389-.494.114-.169.204-.346.27-.531m-2.197 2.608 1.502-1.617c.144-.16.272-.323.384-.488.112-.165.2-.339.264-.52m.18 2.67-.036.034m.036-.035h-.001l-.035.035m.036-.035c.075.076.11.177.11.299V8.85h-4.252v-.426c0-.08.014-.163.042-.248l.001-.003a.806.806 0 0 1 .162-.247l.001-.002 1.744-1.72c.265-.253.483-.52.657-.798v-.001c.178-.277.265-.545.265-.805 0-.246-.072-.428-.209-.555v-.001a.713.713 0 0 0-.517-.194c-.22 0-.395.059-.528.172-.13.11-.23.265-.297.466l-.003.01-.001-.001a.615.615 0 0 1-.219.234v.001c-.086.046-.212.048-.369.021l.009-.049m3.368 3.16a.357.357 0 0 1 .096.264V8.8H15.123v-.376c0-.075.013-.152.04-.232a.755.755 0 0 1 .152-.232l1.744-1.72c.266-.256.488-.525.664-.808.18-.283.272-.56.272-.832 0-.256-.075-.453-.224-.592a.763.763 0 0 0-.552-.208.833.833 0 0 0-.56.184 1.06 1.06 0 0 0-.312.488.567.567 0 0 1-.2.216c-.07.037-.182.043-.336.016m0 0-.624-.104c.037-.288.114-.539.232-.752l.392.856Zm3.224.456.046.017m-.046-.017a1.71 1.71 0 0 0 .104-.6c0-.245-.046-.472-.136-.68m.032 1.28.047.017m0 0a1.76 1.76 0 0 0 .107-.617c0-.251-.047-.485-.14-.7a1.479 1.479 0 0 0-.38-.545 1.68 1.68 0 0 0-.602-.354 2.263 2.263 0 0 0-.792-.131 2.65 2.65 0 0 0-.791.114c-.24.071-.454.18-.64.329a1.776 1.776 0 0 0-.469.55c-.121.22-.2.478-.238.77l-.006.048.047.008.624.104 3.2-.873m0 0a1.43 1.43 0 0 0-.367-.528l.368.528Z"
        fill={color}
        stroke={color}
        strokeWidth={0.1}
      />
      <Path
        d="m13 15.5-6-11M7 15.5l6-11"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}
export default SvgSuperscript
