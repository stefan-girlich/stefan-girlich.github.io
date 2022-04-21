import '@fontsource/montserrat/variable.css'
import { transparentize } from 'polished'
import React from 'react'
import { createRoot } from 'react-dom/client'
import { createGlobalStyle, ThemeProvider } from 'styled-components/macro'
import theme from './config/theme'
import HomePage from './HomePage'
import './index.css'
import reportWebVitals from './reportWebVitals'
import './reset.css'

export const IS_TOUCH_DEVICE =
  'ontouchstart' in window || navigator.maxTouchPoints > 0 || (navigator as any).msMaxTouchPoints > 0

const GlobalStyle = createGlobalStyle`
  * {
    cursor: default;
    -webkit-tap-highlight-color: ${({ theme }) => transparentize(0.75, theme.palette.primary.main)};
    box-sizing: border-box;
  }

  html, body {
    background: ${({ theme }) => theme.palette.background.main};
  }

  *::selection {
    background: ${({ theme }) => theme.palette.primary.main};
    color: ${({ theme }) => theme.palette.primary.contrastText};
  }
`

const container = document.getElementById('root')
const root = createRoot(container!)
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <HomePage />
    </ThemeProvider>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
