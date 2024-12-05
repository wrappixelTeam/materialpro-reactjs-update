/* eslint-disable import/no-named-as-default-member */
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
// eslint-disable-next-line import/no-named-as-default
// import reportWebVitals from './reportWebVitals';
import { store } from './store/Store';
import App from './App';
import './data';
import { Providers } from './store/providers';




ReactDOM.createRoot(document.getElementById('root')).render(
   <Providers>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </Providers>
  
  
)
