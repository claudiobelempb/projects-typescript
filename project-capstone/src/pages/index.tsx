import GlobalStyles from 'assets/themes/GlobalStyles';
import { ThemeDefault } from 'assets/themes/themeDefault';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { AppRoutes } from 'routes/intex';
import { ThemeProvider } from 'styled-components';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={ThemeDefault}>
      <AppRoutes />
      <GlobalStyles />
    </ThemeProvider>
  </React.StrictMode>
);
