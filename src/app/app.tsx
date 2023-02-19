import { Provider } from 'react-redux';

import { AppRouter } from '../pages/routes/app-routes';
import { setupStore } from '../store/store';

const store = setupStore();

export const App = () => (
  <div id='app' >
    <Provider store={store}>
      <AppRouter />
    </Provider>
  </div>
);
