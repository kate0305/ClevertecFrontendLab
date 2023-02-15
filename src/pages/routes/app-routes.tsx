import { Navigate, Route, Routes } from 'react-router-dom';

import { Layout } from '../../ui/layout';
import { LayoutMainPage } from '../../ui/layout-main-page';
import { PAGE_PATHS } from '../../utils/consts';
import { BookPage } from '../book';
import { MainPage } from '../main';
import { Terms } from '../terms';

export const AppRouter = () => (
  <Routes>
    <Route path={PAGE_PATHS.mainPagePath} element={<Layout />}>
      <Route element={<LayoutMainPage />}>
        <Route path={PAGE_PATHS.mainPagePath} element={<Navigate to='/books/all' />} />
        <Route path='/books/:category' element={<MainPage />} />
        <Route path={PAGE_PATHS.termsOfUsePagePath} element={<Terms title='terms' />} />
        <Route path={PAGE_PATHS.contractOfferPagePath} element={<Terms title='contract' />} />
      </Route>
      <Route path='/books/:category/:bookID' element={<BookPage />} />
    </Route>
  </Routes>
);
