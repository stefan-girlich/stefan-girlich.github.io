import 'styled-components/macro'

interface ColorSet {
  main: string
  dark?: string
  contrastText: string
}

interface BrandColorSets {
  email: ColorSet
  linkedin: ColorSet
  github: ColorSet
  soundcloud: ColorSet
}

declare module 'styled-components/macro' {
  export interface DefaultTheme {
    palette: {
      primary: ColorSet
      secondary: ColorSet
      tertiary: ColorSet
      quartary: ColorSet
      background: ColorSet
      brands: BrandColorSets
    }
    spacing: (factor: number) => string
    fontSizes: {
      xl: string
      lg: string
      md: string
      sm: string
      xs: string
      paragraph: string
    }
    zLayers: {
      overlay: number
    }
  }
}
