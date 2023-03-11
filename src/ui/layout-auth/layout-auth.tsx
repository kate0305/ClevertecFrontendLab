import { Outlet } from 'react-router-dom';

import classes from './layout-auth.module.css';

export const LayoutAuthorization = () => (
  <main className={classes.wrapper}>
    <h1 className={classes.brand}>Cleverland</h1>
    <Outlet />
  </main>
);
