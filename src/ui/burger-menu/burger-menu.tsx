import { useRef } from 'react';
import classnames from 'classnames/bind';

import { useOutsideAlerterBurger } from '../../custom-hooks';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { openMenu, toggleMenu } from '../../store/reducers/burger-menu-slice';

import classes from './burger-menu.module.css';

const style = classnames.bind(classes);

export const BurgerMenu = () => {
  const isBurgerOpen = useAppSelector((state) => state.burgerReduser.isMenuOpen);
  const dispatch = useAppDispatch();
  const handle = () => dispatch(toggleMenu());
  const navMenu = useRef<HTMLDivElement>(null);

  useOutsideAlerterBurger(navMenu, handle);

  const className = style({
    burger: true,
    active: isBurgerOpen,
  });

  return (
    <div
      className={className}
      data-test-id='button-burger'
      onClick={handle}
      onKeyDown={handle}
      role='button'
      tabIndex={0}
      //   ref={navMenu}
    >
      <span />
    </div>
  );
};
