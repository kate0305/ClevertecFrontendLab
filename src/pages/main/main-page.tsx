import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { useParams } from 'react-router-dom';

import { booksAPI } from '../../services/book-sevice';
import { BookList } from '../../ui/book-list';
import { NavMenu } from '../../ui/navigation-menu';
import { Preloader } from '../../ui/preloader';
import { Toast } from '../../ui/toast';

import classes from './main-page.module.css';

export const MainPage = () => {
  const { category } = useParams();
  const [view, setView] = useState<string>('tile');
  const [showToast, setShowToast] = useState(false);

  const closeToast = () => setShowToast(false);

  const {
    isError: errBooks,
    isLoading: loadBooks,
    data: booksData,
    isSuccess: successCategory,
  } = booksAPI.useGetListBooksQuery('');

  const {
    data: categoriesData,
    isError: errCategories,
    isLoading: loadCategories,
    isSuccess: successBook,
  } = booksAPI.useGetCategoriesQuery();

  const currentCategory = categoriesData?.find((i) => i.path === category)?.name;

  const booksByCurrentCategory = booksData?.filter(
    ({ categories }) => categories?.filter((i) => i === currentCategory).length
  );

  const books = category === 'all' ? booksData : booksByCurrentCategory;

  const domElement = document.getElementById('app') as HTMLElement;

  useEffect(() => {
    if (errBooks || errCategories) setShowToast(true);
  }, [errBooks, errCategories]);

  if (loadBooks || loadCategories) return <Preloader />;

  return (
    <React.Fragment>
      {showToast && createPortal(<Toast onClose={closeToast} />, domElement)}
      <section className={classes.wrapper}>
        {successCategory && successBook && (
          <React.Fragment>
            <NavMenu setView={setView} />
            <BookList view={view} books={books} />
          </React.Fragment>
        )}
      </section>
    </React.Fragment>
  );
};
