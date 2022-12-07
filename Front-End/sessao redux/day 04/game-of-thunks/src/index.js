import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import store from './store';
import GlobalStyle from './styles/Global';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={ store }>
      <GlobalStyle />
      <App />
    </Provider>
);