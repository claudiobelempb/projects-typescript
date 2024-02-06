import { createBrowserRouter } from 'react-router-dom'

import { PrivateLayout } from './pages/_layouts/private-layout'
import { PublicLayout } from './pages/_layouts/public-layout'
import { Dashboard } from './pages/private/dashboard/dashboard'
import { Orders } from './pages/private/oders/orders'
import { NotFound } from './pages/public/404'
import { SingIn } from './pages/public/sign-in'
import { SingUp } from './pages/public/sign-up'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <PrivateLayout />,
    errorElement: <NotFound />,
    children: [
      { path: '/', element: <Dashboard /> },
      { path: '/orders', element: <Orders /> },
    ],
  },
  {
    path: '/',
    element: <PublicLayout />,
    children: [
      { path: '/sign-in', element: <SingIn /> },
      { path: '/sign-up', element: <SingUp /> },
    ],
  },
])
