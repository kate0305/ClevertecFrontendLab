import { Outlet } from 'react-router-dom';

import { NavBar } from '../nav-bar';

import classes from './layout-main-page.module.css';

export const LayoutMainPage = () => (
  <main className={classes.wrapper}>
    <NavBar />
    <div className={classes.content}>
      <Outlet />
    </div>
  </main>
);
