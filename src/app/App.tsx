import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { AppProviders } from 'app/providers/AppProviders';

export const App = () => (
  <AppProviders>
    <Routes>
      <Route path="/" element={<div>Setup complete</div>}/>
    </Routes>
  </AppProviders>
);
