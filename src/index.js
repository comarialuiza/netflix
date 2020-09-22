import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';

import 'normalize.css';

import GlobalStyle from './styles/global';

ReactDOM.render(
    <>
      <App />
      <GlobalStyle />
    </>,
  document.getElementById('root')
);