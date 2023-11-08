import { createTheme } from '@tamagui/core'

import { tokens } from './tokens'

const light = createTheme({
  background: tokens.color['white-100'],
  textPrimary: tokens.color['neutral-100'],
  primary: tokens.color['blue-50'],
  primaryHover: tokens.color['blue-60'],
  success: tokens.color['success-50'],
  successHover: tokens.color['success-60'],
  danger: tokens.color['danger-50'],
  dangerHover: tokens.color['danger-60'],
  purple: tokens.color['purple-50'],
  purpleHover: tokens.color['purple-60'],
  army: tokens.color['army-50'],
  armyHover: tokens.color['army-60'],
  turquoise: tokens.color['turquoise-50'],
  turquoiseHover: tokens.color['turquoise-60'],
  blue: tokens.color['blue-50'],
  blueHover: tokens.color['blue-60'],
  yellow: tokens.color['yellow-50'],
  yellowHover: tokens.color['yellow-60'],
  orange: tokens.color['orange-50'],
  orangeHover: tokens.color['orange-60'],
  pink: tokens.color['pink-50'],
  pinkHover: tokens.color['pink-60'],
  copper: tokens.color['copper-50'],
  copperHover: tokens.color['copper-50'],
  camel: tokens.color['camel-50'],
  camelHover: tokens.color['camel-50'],
  placeHolderColor: tokens.color['neutral-40'],
  placeHolderColorBlurred: tokens.color['neutral-80/40'],
  iconButtonBackground: tokens.color['neutral-10'],
  iconButtonBackgroundHover: tokens.color['neutral-20'],
  iconButtonBackgroundSelected: tokens.color['neutral-20'],
  iconButtonBorderSelected: tokens.color['neutral-30'],
  iconButtonBackgroundBlurred: tokens.color['neutral-80/5'],
  iconButtonBackgroundBlurredHover: tokens.color['neutral-80/10'],
  iconButtonBackgroundBlurredSelected: tokens.color['neutral-80/10'],
  iconButtonBorderBlurredSelected: tokens.color['neutral-80/5'],
  iconButtonOutlineBackgroundSelected: tokens.color['neutral-10'],
  iconButtonOutlineBorder: tokens.color['neutral-20'],
  iconButtonOutlineBorderHover: tokens.color['neutral-30'],
  iconButtonOutlineBorderSelected: tokens.color['neutral-20'],
  iconButtonOutBackgroundBlurredSelected: tokens.color['neutral-10'],
  iconButtonOutlineBorderBlurred: tokens.color['neutral-80/10'],
  iconButtonOutlineBorderBlurredHover: tokens.color['neutral-80/20'],
  iconButtonOutlineBorderBlurredSelected: tokens.color['neutral-80/10'],
  iconButtonColor: tokens.color['neutral-50'],
  iconButtonColorSelected: tokens.color['neutral-100'],
  iconButtonColorBlurred: tokens.color['neutral-100'],
  iconButtonColorOutline: tokens.color['neutral-50'],
  iconButtonColorOutlineSelected: tokens.color['neutral-100'],
  iconButtonColorOutlineBlurred: tokens.color['neutral-80/70'],
  blurBackground: tokens.color['white/70'],
})

// note: we set up a single consistent base type to validate the rest:
type BaseTheme = typeof light

const dark: BaseTheme = createTheme({
  background: tokens.color['neutral-95'],
  textPrimary: tokens.color['white-100'],
  primary: tokens.color['blue-60'],
  primaryHover: tokens.color['blue-50'],
  success: tokens.color['success-60'],
  successHover: tokens.color['success-50'],
  danger: tokens.color['danger-60'],
  dangerHover: tokens.color['danger-50'],
  purple: tokens.color['purple-60'],
  purpleHover: tokens.color['purple-50'],
  army: tokens.color['army-60'],
  armyHover: tokens.color['army-50'],
  turquoise: tokens.color['turquoise-60'],
  turquoiseHover: tokens.color['turquoise-50'],
  blue: tokens.color['blue-60'],
  blueHover: tokens.color['blue-50'],
  yellow: tokens.color['yellow-60'],
  yellowHover: tokens.color['yellow-50'],
  orange: tokens.color['orange-60'],
  orangeHover: tokens.color['orange-50'],
  pink: tokens.color['pink-60'],
  pinkHover: tokens.color['pink-50'],
  copper: tokens.color['copper-60'],
  copperHover: tokens.color['copper-50'],
  camel: tokens.color['camel-60'],
  camelHover: tokens.color['camel-50'],
  placeHolderColor: tokens.color['neutral-50'],
  placeHolderColorBlurred: tokens.color['white-30'],
  iconButtonBackground: tokens.color['neutral-90'],
  iconButtonBackgroundHover: tokens.color['neutral-80'],
  iconButtonBackgroundSelected: tokens.color['neutral-80'],
  iconButtonBorderSelected: tokens.color['neutral-60'],
  iconButtonBackgroundBlurred: tokens.color['white-5'],
  iconButtonBackgroundBlurredHover: tokens.color['white-10'],
  iconButtonBackgroundBlurredSelected: tokens.color['white-10'],
  iconButtonBorderBlurredSelected: tokens.color['white-5'],
  iconButtonOutlineBackgroundSelected: tokens.color['neutral-80/70'],
  iconButtonOutlineBorder: tokens.color['neutral-80'],
  iconButtonOutlineBorderHover: tokens.color['neutral-70'],
  iconButtonOutlineBorderSelected: tokens.color['neutral-70'],
  iconButtonOutBackgroundBlurredSelected: tokens.color['white-5'],
  iconButtonOutlineBorderBlurred: tokens.color['white-10'],
  iconButtonOutlineBorderBlurredHover: tokens.color['white-20'],
  iconButtonOutlineBorderBlurredSelected: tokens.color['white-10'],
  iconButtonColor: tokens.color['neutral-40'],
  iconButtonColorSelected: tokens.color['white-100'],
  iconButtonColorBlurred: tokens.color['white-100'],
  iconButtonColorOutline: tokens.color['neutral-40'],
  iconButtonColorOutlineSelected: tokens.color['white-100'],
  iconButtonColorOutlineBlurred: tokens.color['white-100'],
  blurBackground: tokens.color['neutral-70'],
})

const allThemes = {
  light,
  dark,
}

type ThemeName = keyof typeof allThemes

type Themes = {
  [key in ThemeName]: BaseTheme
}

export const themes: Themes = allThemes
