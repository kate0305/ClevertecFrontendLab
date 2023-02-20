import { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import classnames from 'classnames/bind';

import { useOutsideAlerter } from '../../custom-hooks';
import data from '../../data/books.json';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { booksAPI } from '../../services/book-sevice';
import { closeMenu, toggleMenu } from '../../store/reducers/burger-menu-slice';
import { PAGE_PATHS } from '../../utils/consts';
import { ButtonDropdown } from '../buttons/btn-dropdown';

import classes from './nav-bar.module.css';

const style = classnames.bind(classes);

export const NavBar = () => {
  const { data: categoriesData } = booksAPI.useGetCategoriesQuery();
  const navMenu = useRef<HTMLElement>(null);
  const isBurgerOpen = useAppSelector((state) => state.burgerReduser.isMenuOpen);
  const dispatch = useAppDispatch();
  const handle = () => dispatch(toggleMenu());
  const close = () => dispatch(closeMenu());
  const setActive = ({ isActive }: { isActive: boolean }) => (isActive ? classes.active : classes.link);
  const setActiveGenre = ({ isActive }: { isActive: boolean }) => (isActive ? classes.activeGenre : classes.genre);
  const [isOpen, setOpen] = useState<boolean>(true);
  const toggleBooksList = () => setOpen(!isOpen);
  const closeBooksList = () => {
    setOpen(false);
    close();
  };

  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);

    window.addEventListener('resize', handleResizeWindow);

    return () => {
      window.removeEventListener('resize', handleResizeWindow);
    };
  }, []);

  const className = style({
    wrapper: true,
    burger: isBurgerOpen,
  });

  const list = style({
    list: true,
    hidden: !isOpen,
  });

  const amountBooks = Object.values(data);

  useOutsideAlerter(navMenu, close, isBurgerOpen);

  return (
    <nav className={className} data-test-id={isBurgerOpen ? 'burger-navigation' : ''} ref={navMenu}>
      <div>
        <NavLink
          to='/books/all'
          className={setActive}
          style={{ marginBottom: '16px' }}
          data-test-id={isBurgerOpen ? 'burger-showcase' : 'navigation-showcase'}
          onClick={toggleBooksList}
        >
          Витрина книг
          {categoriesData ? <ButtonDropdown isOpen={isOpen} isColor={true} /> : ''}
        </NavLink>
        {categoriesData && (
          <ul className={list} data-test-id={width < 800 ? 'burger-books' : 'navigation-books'}>
            <NavLink to='/books/all' className={setActiveGenre}>
              Все книги
            </NavLink>
            {categoriesData.map(({ id, path, name }, index) => (
              <NavLink to={`/books/${path}`} key={`${id}`} className={setActiveGenre} onClick={handle}>
                {name}
                <span className={classes.amount}>{amountBooks[index].length}</span>
              </NavLink>
            ))}
          </ul>
        )}
      </div>
      <NavLink
        to={PAGE_PATHS.termsOfUsePagePath}
        className={setActive}
        data-test-id={isBurgerOpen ? 'burger-terms' : 'navigation-terms'}
        onClick={closeBooksList}
      >
        Правила пользования
      </NavLink>
      <NavLink
        to={PAGE_PATHS.contractOfferPagePath}
        className={setActive}
        data-test-id={isBurgerOpen ? 'burger-contract' : 'navigation-contract'}
        onClick={closeBooksList}
      >
        Договор оферты
      </NavLink>
    </nav>
  );
};
