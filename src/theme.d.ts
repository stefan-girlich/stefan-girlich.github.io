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

type Breakpoint = 'mobile' | 'tablet' | 'desktop'
type BreakpointMode = 'min' | 'max'
type FontSize = 'xl' | 'lg' | 'md' | 'sm' | 'xs' | 'paragraph'

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
    fontSize: (size: FontSize) => string
    fontSizeRaw: (size: FontSize) => number
    zLayers: {
      overlay: number
    }
    media: (breakpoint: Breakpoint, mode?: BreakpointMode) => string
  }
}
