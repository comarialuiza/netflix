import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { firebase } from './lib/firebase.prod';

import 'normalize.css';

import GlobalStyle from './styles/global';
import { FirebaseContext } from './context/firebase';

ReactDOM.render(
    <FirebaseContext.Provider value={{ firebase }} >
      <App />
      <GlobalStyle />
    </FirebaseContext.Provider>,
  document.getElementById('root')
);