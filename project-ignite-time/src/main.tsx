import { CycleContextProvider } from '@contexts/CyclesContext';
import { RouterMain } from '@routes/intex';
import { GlobalStyles } from '@themes/GlobalStyles';
import { ThemeDefault } from '@typesDefault/ThemeDefault';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={ThemeDefault}>
      <CycleContextProvider>
        <RouterMain />
      </CycleContextProvider>
      <GlobalStyles />
    </ThemeProvider>
  </React.StrictMode>
);
