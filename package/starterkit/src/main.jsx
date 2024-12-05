import React from 'react';
import ReactDOM, { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { Providers } from './store/providers';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Providers>   
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </Providers>
)
