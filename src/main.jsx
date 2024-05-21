import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import { Details } from './assets/pages/Details'
import theme from './assets/styles/theme.js'
import GlobalStyle from './assets/styles/global.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <Details />
    </ThemeProvider>
  </React.StrictMode>,
)
