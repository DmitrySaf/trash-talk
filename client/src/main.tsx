import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import { theme } from '@/assets/styles/themes'
import { Global } from '@/assets/styles/Global'
import { FontStyles } from '@/assets/styles/FontStyles'

import { App } from '@/components/App/App.tsx'
import { Registration } from '@/pages/registration/views/Registration'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/registration',
    element: <Registration />
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
