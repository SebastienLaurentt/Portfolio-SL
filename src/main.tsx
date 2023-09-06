import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App/App';

import './styles/index.css';

import DarkModeProvider from "./contexts/DarkModeProvider";
import LanguageProvider from './contexts/LanguageProvider';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <DarkModeProvider>
      <LanguageProvider>
      <App />
      </LanguageProvider>
    </DarkModeProvider>
  </React.StrictMode>
);
