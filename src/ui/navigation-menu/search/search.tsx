import { SearchInputProps } from '../../../utils/types/navigation-menu';

import classes from './search.module.css';

export const SearchBar = ({ handleClick, isOpen }: SearchInputProps) => {

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const openSearch = () => handleClick(true);

  const closeSearch = () => handleClick(false);

  return (
    <form
      className={isOpen ? classes.formFull : classes.form}
      onSubmit={handleSubmit}
      data-test-id='button-search-open'
    >
      <input
        className={classes.search}
        data-test-id='input-search'
        type='search'
        name='search'
        id='search'
        autoComplete='off'
        placeholder='Поиск книги или автора…'
      />

      <input
        className={isOpen ? classes.openSearch : classes.hidden}
        onClick={openSearch}
        data-test-id='input-search'
        type='search'
        name='search'
        id='search'
        autoComplete='off'
        placeholder='Поиск книги или автора…'
      />

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
