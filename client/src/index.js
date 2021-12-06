import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';

import UserStateProvider from './store/userStateProvider';

ReactDOM.render(
  <BrowserRouter>
    <UserStateProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </UserStateProvider>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
