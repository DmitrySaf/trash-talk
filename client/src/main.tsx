import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import { theme } from './assets/styles/themes'
import { Global } from './assets/styles/Global'
import { FontStyles } from './assets/styles/FontStyles'

import { App } from './components/App/App.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Global />
      <FontStyles />
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
)
