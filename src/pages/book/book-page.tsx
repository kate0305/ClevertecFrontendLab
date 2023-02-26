import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { useParams } from 'react-router-dom';

import { booksAPI } from '../../services/book-sevice';
import { BookDetailedInfo } from '../../ui/book-detail';
import { BookRating } from '../../ui/book-rating';
import { BreadCrumbs } from '../../ui/bread-crumbs';
import { Button } from '../../ui/buttons/btn-primary';
import { Comments } from '../../ui/comments';
import { BookMainPhoto } from '../../ui/photo';
import { Preloader } from '../../ui/preloader';
import { Toast } from '../../ui/toast';

import classes from './book-page.module.css';

export const BookPage = () => {
  const { category, bookID } = useParams();
  const { data: bookInfo, isError, isLoading } = booksAPI.useGetBookQuery(bookID as string);
  const { data: categoriesData } = booksAPI.useGetCategoriesQuery();
  const [showToast, setShowToast] = useState(false);
  const currentCategory = categoriesData?.find((i) => i.path === category)?.name;

  useEffect(() => {
    if (isError) setShowToast(true);
  }, [isError]);

  const closeToast = () => setShowToast(false);

  if (isLoading) return <Preloader />;
  const domElement = document.getElementById('app') as HTMLElement;

  return (
    <React.Fragment>
      {showToast && createPortal(<Toast onClose={closeToast} />, domElement)}
      <section className={classes.wrapper}>
        <BreadCrumbs title={bookInfo?.title} currentCategory={currentCategory} />
        {bookInfo && (
          <React.Fragment>
            <div className={classes.mainInfo}>
              <BookMainPhoto images={bookInfo.images} />
              <div className={classes.wrap}>
                <div className={classes.bookData}>
                  <h1 className={classes.title} data-test-id='book-title'>
                    {bookInfo.title}
                  </h1>
                  <p className={classes.autor}>{bookInfo.authors}</p>
                  <Button text='Забронировать' className='btnBook' />
                </div>
                <div className={classes.discription}>
                  <h5 className={classes.subTitle}>О книге</h5>
                  <p className={classes.text}>{bookInfo.description}</p>
                </div>
              </div>
            </div>
            <div className={classes.bookDop}>
              <BookRating rating={bookInfo.rating} />
              <BookDetailedInfo bookInfo={bookInfo} currentCategory={currentCategory} />
              <Comments comments={bookInfo.comments} />
            </div>
          </React.Fragment>
        )}
      </section>
    </React.Fragment>
  );
};
