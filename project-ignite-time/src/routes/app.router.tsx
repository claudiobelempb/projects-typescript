import { useRoutes } from 'react-router-dom';

import { HistoryPage } from '@pages/HistoryPage';
import { HomePage } from '@pages/HomePage';
import { NotFoundPage } from '@pages/NotFoundPage';
import { MainTemplates } from '@templates/MainTemplates';

export function MainRoutes() {
  return useRoutes([
    {
      path: '/',
      element: <MainTemplates />,
      children: [
        {
          index: true,
          element: <HomePage />
        },
        { path: '/history', element: <HistoryPage /> },
        {
          path: '*',
          element: <NotFoundPage />
        }
      ]
    }
  ]);
}
