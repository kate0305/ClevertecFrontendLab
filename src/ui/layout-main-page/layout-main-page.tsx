import { useState } from 'react';
import { createPortal } from 'react-dom';
import { Outlet, useOutletContext } from 'react-router-dom';

import { booksAPI } from '../../services/book-sevice';
import { ListOfBooks } from '../../utils/types/book';
import { CategoriesList } from '../../utils/types/navbar';
import { NavBar } from '../nav-bar';
import { Preloader } from '../preloader';
import { Toast } from '../toast';

import classes from './layout-main-page.module.css';

type ContextType = {
  booksData: ListOfBooks[];
  categoriesData: CategoriesList[];
};

export const LayoutMainPage = () => {
  const { data: booksData, isError: errBooks, isLoading: loadBooks } = booksAPI.useGetListBooksQuery('');
  const { data: categoriesData, isError: errCategories, isLoading: loadCategories } = booksAPI.useGetCategoriesQuery();
  const [showToast, setShowToast] = useState(false);
  const closeToast = () => setShowToast(false);
  const domElement = document.getElementById('app') as HTMLElement;

  if (errBooks || errCategories) return createPortal(<Toast onClose={closeToast} />, domElement);
  if (loadBooks || loadCategories) return <Preloader />;

  return (
    <main className={classes.wrapper}>
      {categoriesData && <NavBar categories={categoriesData} />}
      <div className={classes.content}>
        <Outlet context={{ booksData, categoriesData }} />
      </div>
    </main>
  );
};

export const useBooksData = () => useOutletContext<ContextType>();
