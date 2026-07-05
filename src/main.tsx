import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router';



import '@/styles/global.css';
import { AppProviders } from '@/app/providers/AppProviders';
import { AppRoutes } from '@/app/routes/AppRoutes';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <AppProviders>
        <AppRoutes />
      </AppProviders>
    </BrowserRouter>
  </React.StrictMode>
);