import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import { theme } from '@/assets/styles/themes'
import { Global } from '@/assets/styles/Global'
import { FontStyles } from '@/assets/styles/FontStyles'

import { Chats } from '@/pages/chats/views/Chats'
import { Registration } from '@/pages/registration/views/Registration'

const router = createBrowserRouter([
  {
    path: '/users/:username',
    element: <Chats />
  },
  {
    path: '/registration',
    element: <Registration />
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ThemeProvider theme={theme}>
    <Global />
    <FontStyles />
    <RouterProvider router={router} />
  </ThemeProvider>
)
