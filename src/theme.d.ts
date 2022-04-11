import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    palette: {
      primary: {
        main: string
        contrastText: string
      }
      secondary: {
        main: string
        contrastText: string
      }
      tertiary: {
        main: string
        contrastText: string
      }
      quartary: {
        main: string
        contrastText: string
      }
      background: {
        main: string
        contrastText: string
      }
    }
    spacing: (factor: number) => string
    fontSizes: {
      xl: string
      lg: string
      md: string
      sm: string
      paragraph: string
    }
  }
}
