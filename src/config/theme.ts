import { DefaultTheme } from 'styled-components/macro'

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
  },
  spacing: (factor: number) => `${factor * 8}px`,
  fontSizes: {
    xl: '36px',
    lg: '26px',
    md: '20px',
    sm: '14px',
    xs: '10px',
    paragraph: '16px',
  },
}

export default theme
