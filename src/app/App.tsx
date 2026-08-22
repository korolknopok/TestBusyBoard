import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { AppProviders } from 'app/providers/AppProviders';
import { Header } from 'widgets/header/Header';
import { SupplyRequestsPage } from 'pages/supply-requests/SupplyRequestsPage';

export const App = () => (
  <AppProviders>
    <Header/>
    <Routes>
      <Route
        path="/"
        element={<SupplyRequestsPage/>}
      />
    </Routes>
  </AppProviders>
);
