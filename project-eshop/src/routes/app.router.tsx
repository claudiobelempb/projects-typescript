import React, { lazy } from 'react';

import { useRoutes } from 'react-router-dom';

const HomePage = lazy(() => {
  return import(
    /* webpackPrefetch: true */
    /* webpackChunkname: "Home Page" */ 'pages/HomePages'
  );
});

const NotFoundPage = lazy(() => {
  return import(
    /* webpackPrefetch: true */

    /* webpackChunkname: "NotFound Page" */ 'pages/NotFoundPage'
  );
});

export const Routes: React.FC = () => {
  return useRoutes([
    { path: '/', element: <HomePage /> },

    {
      path: '*',

      element: <NotFoundPage />
    }
  ]);
};
