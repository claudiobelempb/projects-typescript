import { BrowserRouter } from 'react-router-dom';
import { MainRoutes } from './app.router';

export function RouterMain() {
  return (
    <BrowserRouter>
      <MainRoutes />
    </BrowserRouter>
  );
}
