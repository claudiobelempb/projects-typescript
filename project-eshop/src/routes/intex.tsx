import { AppLoadingSpinner } from 'components/AppLoadingSpinner';
import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Routes } from './app.router';

export const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<AppLoadingSpinner />}>
        <Routes />
      </Suspense>
    </BrowserRouter>
  );
};
