/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';

import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { setFoundBooks, setSearchValue } from '../../../store/reducers/books-slice';
import { SearchInputProps } from '../../../utils/types/navigation-menu';

import classes from './search.module.css';

export const SearchBar = ({ handleClick, isOpen }: SearchInputProps) => {
  const dispatch = useAppDispatch();
  const { booksByCategory, searchValue } = useAppSelector((state) => state.booksReduser);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const results = booksByCategory.filter(({ title }) => {
      if (e.target.value === '') return booksByCategory;

      return title.toLowerCase().includes(e.target.value.toLowerCase());
    });

    dispatch(setSearchValue(e.target.value));
    dispatch(setFoundBooks(results));
  };

  useEffect(() => {
    const results = booksByCategory.filter(({ title }) => title.toLowerCase().includes(searchValue.toLowerCase()));

    dispatch(setFoundBooks(results));
  }, [booksByCategory, dispatch]);

  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);

    window.addEventListener('resize', handleResizeWindow);

    return () => {
      window.removeEventListener('resize', handleResizeWindow);
    };
  }, []);

  const openSearch = () => handleClick(true);

  const closeSearch = () => handleClick(false);

  return (
    <form
      className={isOpen ? classes.formFull : classes.form}
      onSubmit={handleSubmit}
      data-test-id='button-search-open'
    >
      {width > 320 ? (
        <input
          className={classes.search}
          onChange={handleChange}
          value={searchValue}
          data-test-id='input-search'
          type='search'
          name='search'
          id='search'
          autoComplete='off'
          placeholder='Поиск книги или автора…'
        />
      ) : (
        <input
          className={isOpen ? classes.openSearch : classes.hidden}
          onChange={handleChange}
          value={searchValue}
          data-test-id='input-search'
          type='search'
          name='search'
          id='search'
          autoComplete='off'
          placeholder='Поиск книги или автора…'
          ref={(input) => input && input.focus()}
        />
      )}

      <button
        className={isOpen ? classes.hidden : classes.btnSearch}
        onClick={openSearch}
        type='button'
        aria-label='search'
        name='search'
        id='search'
        placeholder='Поиск книги или автора…'
      />
      {isOpen && (
        <button
          className={classes.button}
          data-test-id='button-search-close'
          type='button'
          aria-label='close'
          onClick={closeSearch}
        />
      )}
    </form>
  );
};
