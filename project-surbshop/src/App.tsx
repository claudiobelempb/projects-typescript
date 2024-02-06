import { Helmet, HelmetProvider } from 'react-helmet-async'
import { RouterProvider } from 'react-router-dom'
import { Toaster } from 'sonner'

import { ThemeProvider } from './components/theme/theme-provider'
import { router } from './routes'

export default App

export function App() {
  return (
    <HelmetProvider>
      <ThemeProvider defaultTheme="dark" storageKey="surbshop-theme">
        <Helmet titleTemplate="%s | surb-shop" />
        <Toaster richColors />
        <RouterProvider router={router} />
      </ThemeProvider>
    </HelmetProvider>
  )
}
