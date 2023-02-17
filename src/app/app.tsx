import { Provider } from 'react-redux';

import { AppRouter } from '../pages/routes/app-routes';
import { setupStore } from '../store/store';

import classes from './app.module.css';

const store = setupStore();

export const App = () => (
  <div id='app' className={classes.wrapper}>
    <Provider store={store}>
      <AppRouter />
    </Provider>
  </div>
);
