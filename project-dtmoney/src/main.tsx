import { TransactionsProvider } from '@contexts/TransactionsContext';
import { GlobalStyles } from '@themes/GlobalStyles';
import { ThemeDefault } from '@typesDefault/ThemeDefault';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { RouterMain } from './routes';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <TransactionsProvider>
      <ThemeProvider theme={ThemeDefault}>
        <RouterMain />
        <GlobalStyles />
      </ThemeProvider>
    </TransactionsProvider>
  </React.StrictMode>
);
