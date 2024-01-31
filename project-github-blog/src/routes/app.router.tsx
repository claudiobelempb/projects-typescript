import { useRoutes } from 'react-router-dom';

import { HomePage } from '@pages/HomePage';
import { NotFoundPage } from '@pages/NotFoundPage';
import { PostPage } from '@pages/PostPage';

export function MainRoutes() {
  return useRoutes([
    { path: '/', element: <HomePage /> },
    {
      path: `/posts/:user/:repo/:number`,
      element: <PostPage />
    },
    // { path: '/dashboard', element: <DashBoardPage /> },
    // { path: '/repositories/:login/:name', element: <RepoPage /> },
    {
      path: '*',
      element: <NotFoundPage />
    }
  ]);
}
