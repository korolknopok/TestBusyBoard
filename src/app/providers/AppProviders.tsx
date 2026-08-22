import React, { PropsWithChildren } from 'react';
import { BrowserRouter } from 'react-router-dom';

export const AppProviders = ({ children }: PropsWithChildren) => (
  <BrowserRouter>
    {children}
  </BrowserRouter>
);
