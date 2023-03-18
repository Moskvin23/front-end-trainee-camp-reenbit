import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { AppProvider } from './context';
import { Auth0Provider } from '@auth0/auth0-react';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Auth0Provider
      domain="dev-mn75v02jnld2d48o.us.auth0.com"
      clientId="mhX8og0OBtjxGiqNSVyZAhR3oY9QTlzw"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
      cacheLocation="localstorage">
      <BrowserRouter>
        <AppProvider>
          <App />
        </AppProvider>
      </BrowserRouter>
    </Auth0Provider>
  </>,
);
