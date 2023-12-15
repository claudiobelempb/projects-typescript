import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { MainRoutes } from './app.router';

export const RouterMain: React.FC = () => {
  return (
    <BrowserRouter>
      <MainRoutes />
    </BrowserRouter>
  );
};
