import React from 'react';
import { NavLink, useParams } from 'react-router-dom';

import { booksFoto } from '../../../data/books-photos';
import { BookCardTitle } from '../../book-card-title';
import { BookImg } from '../../book-img';
import { ButtonBookCard } from '../../buttons/btn-book-card';
import { Rating } from '../../rating';

import classes from './book-card.module.css';

export const BookCard = () => {
  const { category } = useParams();

  return (
    <React.Fragment>
      {booksFoto.map(({ id, images }) => (
        <NavLink to={`/books/${category}/${id}`} data-test-id='card' key={id}>
          <div className={classes.tile}>
            <BookImg images={images} />
            <Rating />
            <BookCardTitle />
            <ButtonBookCard />
          </div>
        </NavLink>
      ))}
    </React.Fragment>
  );
};
