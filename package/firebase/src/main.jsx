import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from './store/Store';
import App from './App';
import { AuthProvider } from './components/firebase/FirebaseContext';
import { Providers } from './store/providers';

ReactDOM.createRoot(document.getElementById('root')).render(
   <Providers>
    <BrowserRouter>
      <AuthProvider>
        <App />
      </AuthProvider>
    </BrowserRouter>
    </Providers>
)

