import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'theme-ui';
import preset from '@rebass/preset';
import { App } from './App';

ReactDOM.render(
  <ThemeProvider theme={preset}>
    <App />
  </ThemeProvider>,
  document.getElementById('root'),
);
