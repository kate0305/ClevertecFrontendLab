import React from 'react';
import { Outlet } from 'react-router-dom';

import { Footer } from '../footer';
import { Header } from '../header';

export const Layout = () => (
  <React.Fragment>
    <Header />
    <Outlet />
    <Footer />
  </React.Fragment>
);
