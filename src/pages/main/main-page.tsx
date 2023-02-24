import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { useParams } from 'react-router-dom';

import { sortBooks } from '../../common/sort-books';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { booksAPI } from '../../services/book-sevice';
import { booksSlice } from '../../store/reducers/books-slice';
import { BookList } from '../../ui/book-list';
import { NavMenu } from '../../ui/navigation-menu';
import { Preloader } from '../../ui/preloader';
import { Toast } from '../../ui/toast';
import { ListOfBooks } from '../../utils/types/book';

import classes from './main-page.module.css';

export const MainPage = () => {
  const dispatch = useAppDispatch();
  const { sortedBooks } = useAppSelector((state) => state.booksReduser);
  const { category } = useParams();
  const [view, setView] = useState<string>('tile');
  const [showToast, setShowToast] = useState(false);
  const [booksList, setBooks] = useState<ListOfBooks[]>([]);

  const closeToast = () => setShowToast(false);

  const {
    isError: errBooks,
    isLoading: loadBooks,
    data: booksData,
    isFetching,
    isSuccess: successCategory,
  } = booksAPI.useGetListBooksQuery('', { refetchOnMountOrArgChange: true });

  const {
    data: categoriesData,
    isError: errCategories,
    isLoading: loadCategories,
    isSuccess: successBook,
  } = booksAPI.useGetCategoriesQuery();

  const { setSortedBooks } = booksSlice.actions;

  useEffect(() => {
    if (errBooks || errCategories) setShowToast(true);
  }, [errBooks, errCategories]);

  useEffect(() => {
    if (successCategory && successBook) {
      const booksAfterSort = sortBooks(booksData, true);
      
      dispatch(setSortedBooks(booksAfterSort));
    }
  }, [successCategory, categoriesData, booksData, dispatch, setSortedBooks, successBook]);

  useEffect(() => {
    const currentCategory = categoriesData?.find((i) => i.path === category)?.name;
    const booksByCurrentCategory = sortedBooks.filter(
      ({ categories }) => categories?.filter((i) => i === currentCategory).length
    );
    const books = category === 'all' ? sortedBooks : booksByCurrentCategory;

    setBooks(books);
  }, [categoriesData, category, sortedBooks]);

  const domElement = document.getElementById('app') as HTMLElement;

  if (loadBooks || loadCategories || isFetching) return <Preloader />;

  return (
    <React.Fragment>
      {showToast && createPortal(<Toast onClose={closeToast} />, domElement)}
      <section className={classes.wrapper}>
        {successCategory && successBook && (
          <React.Fragment>
            <NavMenu setView={setView} />
            <BookList view={view} books={booksList} />
          </React.Fragment>
        )}
      </section>
    </React.Fragment>
  );
};
