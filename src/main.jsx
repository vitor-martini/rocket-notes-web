import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import { Home } from './assets/pages/Home'
import theme from './assets/styles/theme.js'
import GlobalStyle from './assets/styles/global.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <Home />
    </ThemeProvider>
  </React.StrictMode>,
)
