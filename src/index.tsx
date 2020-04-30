import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'theme-ui';
import preset from '@rebass/preset';
import { App } from './App';

const theme = {
  ...preset,
  breakpoints: ['769px', '3000px'],
};

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById('root'),
);
