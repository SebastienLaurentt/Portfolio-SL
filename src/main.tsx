import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App/App';

import './styles/index.css';

import DarkModeProvider from "./contexts/DarkModeProvider";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <DarkModeProvider>
      <App />
    </DarkModeProvider>
  </React.StrictMode>
);
