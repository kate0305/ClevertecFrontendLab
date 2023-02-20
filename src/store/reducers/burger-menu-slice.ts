/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';


interface BurgerMenuReducerState {
  isMenuOpen: boolean;
};

export const initialState: BurgerMenuReducerState = {
  isMenuOpen: false,
};

export const burgerMenuSlice = createSlice({
  name: 'burgerMenu',
  initialState,
  reducers: {
    toggleMenu(state) {
      state.isMenuOpen = !state.isMenuOpen;
    },
    closeMenu(state) {
      state.isMenuOpen = false;
    },
    openMenu(state) {
      state.isMenuOpen = true;
    },
  },
});

export const { toggleMenu, closeMenu, openMenu } = burgerMenuSlice.actions;
export const burgerReduser =  burgerMenuSlice.reducer;
