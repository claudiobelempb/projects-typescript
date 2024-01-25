import { useRoutes } from 'react-router-dom';

import { HomePage } from '@pages/HomePage';
import { NotFoundPage } from '@pages/NotFoundPage';

export function MainRoutes() {
  return useRoutes([
    { path: '/', element: <HomePage /> },
    // { path: '/dashboard', element: <DashBoardPage /> },
    // { path: '/repositories/:login/:name', element: <RepoPage /> },
    {
      path: '*',
      element: <NotFoundPage />
    }
  ]);
}
