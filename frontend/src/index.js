import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css'
import { createReactClient,studioProvider,LivepeerConfig } from "@livepeer/react";

const client = createReactClient({
  provider:studioProvider({
      apiKey: "805433f7-f582-43f4-9b5c-4e1ccd023bb0"
  })
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <LivepeerConfig client={client}>
      <App />
    </LivepeerConfig>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
