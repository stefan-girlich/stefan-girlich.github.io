import { DefaultTheme } from 'styled-components'

export const theme: DefaultTheme = {
  palette: {
    primary: {
      main: '#00abeb',
      contrastText: '#ffffff',
      dark: '#0077B3',
      light: '#66d5ff',
    },
    secondary: {
      main: '#384955',
      light: '#9CAEBC',
      dark: '#202a31',
    },
    background: {
      default: '#F1FBFF',
    },
  },
  spacing: (factor: number) => `${factor * 4}px`,
}

export default theme
