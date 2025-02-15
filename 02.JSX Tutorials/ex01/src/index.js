import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from './App.js';

if (process.env.NODE_ENV == 'production') {
  console.log = () => {};
  console.info = () => {};
  console.error = () => {};
  console.debug = () => {};
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);