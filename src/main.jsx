import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import { NewNote } from './pages/NewNote'
import theme from './styles/theme.js'
import GlobalStyle from './styles/global.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <NewNote />
    </ThemeProvider>
  </React.StrictMode>,
)
