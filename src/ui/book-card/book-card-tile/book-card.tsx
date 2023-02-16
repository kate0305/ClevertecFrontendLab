import React from 'react';
import { NavLink, useParams } from 'react-router-dom';

import noImage from '../../../assets/images/jpeg/book-no-foto.jpg';
import { booksFoto } from '../../../data/books-photos';
import { booksAPI } from '../../../services/book-sevice';
import { BookCardTitle } from '../../book-card-title';
import { BookImg } from '../../book-img';
import { ButtonBookCard } from '../../buttons/btn-book-card';
import { Rating } from '../../rating';

import classes from './book-card.module.css';

export const BookCard = () => {
  const { category } = useParams();
  const { data: books, error, isLoading } = booksAPI.useGetListBooksQuery('');

  return (
    <React.Fragment>
      {isLoading && <h1>LOADING</h1>}
      {error && <h1>ERROR</h1>}
      {books &&
        books.map(({ id, image }) => (
          <NavLink to={`/books/${category}/${id}`} data-test-id='card' key={id}>
            <div className={classes.tile}>
              <BookImg url={image ? `https://strapi.cleverland.by${image.url}` : noImage} />
              <Rating />
              <BookCardTitle />
              <ButtonBookCard />
            </div>
          </NavLink>
        ))}
    </React.Fragment>
  );
};
