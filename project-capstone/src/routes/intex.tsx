import { AppLoadingSpinner } from 'components/loading-component';
import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { DefaultRoutes } from './app.router';

export const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<AppLoadingSpinner />}>
        <DefaultRoutes />
      </Suspense>
    </BrowserRouter>
  );
};
