import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { booksAPI } from '../services/book-sevice';

import { burgerReduser } from './reducers/burger-menu-slice';

const rootReducer = combineReducers({
  burgerReduser,
  [booksAPI.reducerPath]: booksAPI.reducer,
});

export const setupStore = () => configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(booksAPI.middleware)
  });

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
