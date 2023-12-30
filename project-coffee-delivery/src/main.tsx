import { GlobalStyles } from '@themes/GlobalStyles';
import { ThemeDefault } from '@typesDefault/ThemeDefault';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { RouterMain } from './routes';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={ThemeDefault}>
      <RouterMain />
      <GlobalStyles />
    </ThemeProvider>
  </React.StrictMode>
);
