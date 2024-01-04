import { useRoutes } from 'react-router-dom';

import { CheckoutPage } from '@pages/CheckoutPage';
import { FeedbackSuccess } from '@pages/FeedbackSuccess';
import { HomePage } from '@pages/HomePage';
import { NotFoundPage } from '@pages/NotFoundPage';

export function MainRoutes() {
  return useRoutes([
    { path: '/', element: <HomePage /> },
    { path: '/checkout', element: <CheckoutPage /> },
    { path: '/success', element: <FeedbackSuccess /> },
    // { path: '/dashboard', element: <DashBoardPage /> },
    // { path: '/repositories/:login/:name', element: <RepoPage /> },
    {
      path: '*',
      element: <NotFoundPage />
    }
  ]);
}
