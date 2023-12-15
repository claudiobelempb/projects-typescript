import GlobalStyles from 'assets/themes/GlobalStyles';
import { ThemeDefault } from 'assets/themes/themeDefault';
import { UserProvider } from 'contexts/user.context';
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
      <GlobalStyles />
      <UserProvider>
        <AppRoutes />
      </UserProvider>
    </ThemeProvider>
  </React.StrictMode>
);
