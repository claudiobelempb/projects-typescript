import { createBrowserRouter } from 'react-router-dom'

import { PrivateLayout } from './pages/_layouts/private-layout'
import { PublicLayout } from './pages/_layouts/public-layout'
import { SingIn } from './pages/private/sign-in'
import { Dashboard } from './pages/public/dashboard'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <PrivateLayout />,
    children: [{ path: '/', element: <Dashboard /> }],
  },
  {
    path: '/',
    element: <PublicLayout />,
    children: [{ path: '/sign-in', element: <SingIn /> }],
  },
])
