/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ListOfBooks } from '../../utils/types/book';

interface BooksReducerState {
  sortedBooks: ListOfBooks[];
}

export const initialState: BooksReducerState = {
  sortedBooks: [],
};

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    setSortedBooks(state, action: PayloadAction<ListOfBooks[]>) {
      state.sortedBooks = action.payload;
    },
    // closeMenu(state) {
    //   state.isMenuOpen = false;
    // },
    // openMenu(state) {
    //   state.isMenuOpen = true;
    // },
  },
});

export const { setSortedBooks } = booksSlice.actions;
export const booksReduser = booksSlice.reducer;

