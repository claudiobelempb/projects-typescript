import { useRoutes } from 'react-router-dom';

import { CheckoutPage } from '@pages/CheckoutPage';
import { HomePage } from '@pages/HomePage';
import { NotFoundPage } from '@pages/NotFoundPage';

export function MainRoutes() {
  return useRoutes([
    { path: '/', element: <HomePage /> },
    { path: '/checkout', element: <CheckoutPage /> },
    // { path: '/dashboard', element: <DashBoardPage /> },
    // { path: '/repositories/:login/:name', element: <RepoPage /> },
    {
      path: '*',
      element: <NotFoundPage />
    }
  ]);
}
