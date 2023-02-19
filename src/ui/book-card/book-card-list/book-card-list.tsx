import React from 'react';
import { NavLink, useParams } from 'react-router-dom';

import { booksFoto } from '../../../data/books-photos';
import { Button } from '../../buttons/btn-primary';
import { Rating } from '../../rating';

import classes from './book-card-list.module.css';

export const BookCardList = () => {
  const { category } = useParams();

  return (
    <React.Fragment>
      {booksFoto.map(({ id, images }) => (
        <NavLink to={`/books/${category}/${id}`} data-test-id='card' key={id}>
          <div className={classes.wrapper}>
            <img src={images[0]} alt='book foto' className={classes.img} />
            <div className={classes.content}>
              <div className={classes}>
                <h4 className={classes.title}>
                  Грокаем алгоритмы. Иллюстрированное пособие для программистов и любопытствующих
                </h4>
                <p className={classes.autor}>Адитья Бхаргава, 2019</p>
              </div>
              <div className={classes.buttons}>
                <Rating />
                <Button text='Забронировать' className='btnCard' />
              </div>
            </div>
          </div>
        </NavLink>
      ))}
    </React.Fragment>
  );
};
