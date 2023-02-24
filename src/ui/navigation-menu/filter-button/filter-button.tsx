import { useState } from 'react';
import classnames from 'classnames/bind';

import { sortBooks } from '../../../common/sort-books';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { booksSlice } from '../../../store/reducers/books-slice';
import { FilterInputProps } from '../../../utils/types/navigation-menu';

import classes from './filter-button.module.css';

const style = classnames.bind(classes);

export const FilterButton = ({ isHidden }: FilterInputProps) => {
  const [kindOfSort, toggleKindOfSort] = useState<boolean>(false);

  const dispatch = useAppDispatch();
  const { setSortedBooks } = booksSlice.actions;
  const { sortedBooks } = useAppSelector((state) => state.booksReduser);

  const handleSort = () => {
    toggleKindOfSort(!kindOfSort);
    const newKindOfSort = sortBooks(sortedBooks, kindOfSort);

    dispatch(setSortedBooks(newKindOfSort));
  };

  const className = style({
    filter: true,
    hidden: isHidden,
    sortAsc: kindOfSort,
  });

  return (
    <button onClick={handleSort} className={className} name='rating' type='button' data-test-id='sort-rating-button'>
      По рейтингу
    </button>
  );
};
