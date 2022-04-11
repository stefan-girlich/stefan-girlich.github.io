import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    palette: {
      primary: {
        main: string
        contrastText: string
        dark: string
        light: string
      }
      secondary: {
        main: string
        light: string
        dark: string
      }
      background: {
        default: string
      }
    }
    spacing: (factor: number) => string
  }
}
