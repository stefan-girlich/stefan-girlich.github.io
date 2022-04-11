import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import HomePage from './HomePage'
import reportWebVitals from './reportWebVitals'
import { ThemeProvider } from 'styled-components'
import '@fontsource/montserrat/variable.css'
import theme from './config/theme'

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <HomePage />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
