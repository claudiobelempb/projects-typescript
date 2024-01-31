import { InssuesProvider } from '@contexts/IssuesContext';
import { GlobalStyles } from '@themes/GlobalStyles';
import { ThemeDefault } from '@themes/ThemeDefault';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { RouterMain } from './routes';

import moment from 'moment';
import 'moment/dist/locale/pt-br';

moment.locale('pt-br');

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={ThemeDefault}>
      <InssuesProvider>
        <RouterMain />
      </InssuesProvider>
      <GlobalStyles />
    </ThemeProvider>
  </React.StrictMode>
);
