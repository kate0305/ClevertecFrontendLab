import { useEffect, useRef } from 'react';
import classnames from 'classnames/bind';

import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { closeMenu, toggleMenu } from '../../store/reducers/burger-menu-slice';
import { NavBar } from '../nav-bar';

import classes from './burger-menu.module.css';

const style = classnames.bind(classes);

export const BurgerMenu = () => {
  const isBurgerOpen = useAppSelector((state) => state.burgerReduser.isMenuOpen);
  const dispatch = useAppDispatch();
  const handle = () => dispatch(toggleMenu());
  const navMenu = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navMenu.current && !navMenu.current.contains(event.target as Node)) {
        dispatch(closeMenu());
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dispatch]);

  const className = style({
    burger: true,
    active: isBurgerOpen,
  });

  return (
    <div ref={navMenu}>
      <div
        className={className}
        data-test-id='button-burger'
        onClick={handle}
        onKeyDown={handle}
        role='button'
        tabIndex={0}
      >
        <span />
      </div>
      {isBurgerOpen && <NavBar dataTestId='burger-navigation' />}
    </div>
  );
};
