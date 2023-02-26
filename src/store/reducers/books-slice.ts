/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ListOfBooks } from '../../utils/types/book';

interface BooksReducerState {
  sortedBooks: ListOfBooks[];
  booksByCategory: ListOfBooks[];
  searchValue: string;
  foundBooks: ListOfBooks[];
}

export const initialState: BooksReducerState = {
  sortedBooks: [],
  booksByCategory: [],
  searchValue: '',
  foundBooks: [],
};

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    setSortedBooks(state, action: PayloadAction<ListOfBooks[]>) {
      state.sortedBooks = action.payload;
    },
    setBooksByCategory(state, action: PayloadAction<ListOfBooks[]>) {
      state.booksByCategory = action.payload;
    },
    setSearchValue(state, action: PayloadAction<string>) {
      state.searchValue = action.payload;
    },
    setFoundBooks(state, action: PayloadAction<ListOfBooks[]>) {
      state.foundBooks = action.payload;
    },
  },
});

export const { setSortedBooks, setBooksByCategory, setSearchValue, setFoundBooks } = booksSlice.actions;
export const booksReduser = booksSlice.reducer;

