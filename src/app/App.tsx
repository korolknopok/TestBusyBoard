import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { AppProviders } from 'app/providers/AppProviders';
import { Header } from 'widgets/header/Header';

export const App = () => (
  <AppProviders>
    <Header />
    <Routes>
      <Route path="/"/>
    </Routes>
  </AppProviders>
);
