import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Auth0Provider} from "@auth0/auth0-react";


const root = ReactDOM.createRoot(document.getElementById('root'));

const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;
const audience = process.env.REACT_APP_AUTH0_AUDIENCE;


root.render(
    <React.StrictMode>
        <Auth0Provider
            domain={domain}
            clientId={clientId}
            useRefreshTokens={true}
            cacheLocation="localstorage"
            authorizationParams={{
                audience: audience,
                redirect_uri: window.location.origin,
                scope: 'read:current_user profile'
            }}

        >
            <App/>
        </Auth0Provider>
    </React.StrictMode>
);

reportWebVitals();
