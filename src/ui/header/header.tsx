import { NavLink } from 'react-router-dom';

import { BurgerMenu } from '../burger-menu';
import { User } from '../user';

import classes from './header.module.css';

export const Header = () => (
  <header className={classes.header}>
    <NavLink to='/' className={classes.logo} />
    <BurgerMenu />
    <h1 className={classes.title}>Библиотека</h1>
    <div className={classes.user}>
      <User />
    </div>
  </header>
);
