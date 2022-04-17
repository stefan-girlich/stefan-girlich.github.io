import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import './reset.css'
import HomePage from './HomePage'
import reportWebVitals from './reportWebVitals'
import { createGlobalStyle, ThemeProvider } from 'styled-components/macro'
import '@fontsource/montserrat/variable.css'
import theme from './config/theme'
import { transparentize } from 'polished'

const GlobalStyle = createGlobalStyle`
  * {
    cursor: default;
    -webkit-tap-highlight-color: ${({ theme }) => transparentize(0.75, theme.palette.primary.main)};
  }

  html, body {
    background: ${({ theme }) => theme.palette.background.main};
  }

  *::selection {
    background: ${({ theme }) => theme.palette.primary.main};
    color: ${({ theme }) => theme.palette.primary.contrastText};
  }
`

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <HomePage />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
