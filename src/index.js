import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './assets/styles/index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import 'modern-normalize/modern-normalize.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      </BrowserRouter>
  </React.StrictMode>
);


reportWebVitals();
