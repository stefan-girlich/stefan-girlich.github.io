import { DefaultTheme } from 'styled-components/macro'
import { Breakpoint, FontSize } from '../theme'

// source: https://coolors.co/bfbdc1-6d6a75-37323e-deb841-de9e36
const COLORS = {
  GRAY_X_11_GRAY: '#bfbdc1',
  OLD_LAVENDER: '#6d6a75',
  BLACK_COFFEE: '#37323e',
  GOLD_METALLIC: '#deb841',
  GAMBOGE: '#de9e36',
  BLACK_COFFEE_DARK: '#2b2730',
}

const CONTRASTS = {
  GRAY_X_11_GRAY: '#000',
  OLD_LAVENDER: '#fff',
  BLACK_COFFEE: '#fff',
  GOLD_METALLIC: '#000',
  GAMBOGE: '#000',
}

const BRAND_COLORS = {
  LINKEDIN: '#0a66c2',
  GITHUB: '#fff',
  SOUNDCLOUD: '#f9530a',
}

const BRAND_CONTRASTS = {
  LINKEDIN: '#fff',
  GITHUB: '#161b21',
  SOUNDCLOUD: '#fff',
}

const FONT_SIZES_PX: Record<FontSize, number> = {
  xl: 32,
  lg: 24,
  md: 18,
  sm: 14,
  xs: 10,
  paragraph: 16,
}

const BREAKPOINT_WIDTHS: Record<Breakpoint, number> = {
  mobile: 480,
  tablet: 960,
  desktop: 3840,
}

export const theme: DefaultTheme = {
  palette: {
    primary: {
      main: COLORS.GOLD_METALLIC,
      contrastText: CONTRASTS.GOLD_METALLIC,
    },
    secondary: {
      main: COLORS.GRAY_X_11_GRAY,
      contrastText: CONTRASTS.GRAY_X_11_GRAY,
    },
    tertiary: {
      main: COLORS.GAMBOGE,
      contrastText: CONTRASTS.GAMBOGE,
    },
    quartary: {
      main: COLORS.OLD_LAVENDER,
      contrastText: CONTRASTS.OLD_LAVENDER,
    },
    background: {
      main: COLORS.BLACK_COFFEE,
      dark: COLORS.BLACK_COFFEE_DARK,
      contrastText: CONTRASTS.BLACK_COFFEE,
    },
    brands: {
      email: {
        main: COLORS.GOLD_METALLIC,
        contrastText: CONTRASTS.GOLD_METALLIC,
      },
      linkedin: {
        main: BRAND_COLORS.LINKEDIN,
        contrastText: BRAND_CONTRASTS.LINKEDIN,
      },
      github: {
        main: BRAND_COLORS.GITHUB,
        contrastText: BRAND_CONTRASTS.GITHUB,
      },
      soundcloud: {
        main: BRAND_COLORS.SOUNDCLOUD,
        contrastText: BRAND_CONTRASTS.SOUNDCLOUD,
      },
    },
  },
  spacing: (factor: number) => `${factor * 8}px`,
  fontSize: (size: FontSize) => `${FONT_SIZES_PX[size]}px`,
  fontSizeRaw: (size: FontSize) => FONT_SIZES_PX[size],
  zLayers: {
    overlay: 1000,
  },
  media: (breakpoint: Breakpoint, mode = 'max') =>
    `@media (${mode === 'max' ? 'max-width' : 'min-width'}: ${BREAKPOINT_WIDTHS[breakpoint]}px)`,
}

export default theme
