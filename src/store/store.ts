import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { burgerReduser } from './reducers/burger-menu-slice';

const rootReducer = combineReducers({
  burgerReduser,
});

export const setupStore = () => configureStore({
    reducer: rootReducer,
  });

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
