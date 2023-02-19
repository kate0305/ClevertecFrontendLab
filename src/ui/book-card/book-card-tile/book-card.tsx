/* eslint-disable react/jsx-no-useless-fragment */
import React from 'react';
import { NavLink, useParams } from 'react-router-dom';

import noImage from '../../../assets/images/jpeg/book-no-foto.jpg';
import { booksAPI } from '../../../services/book-sevice';
import { BookCardTitle } from '../../book-card-title';
import { BookImg } from '../../book-img';
import { Button } from '../../buttons/btn-primary';
import { Rating } from '../../rating';

import classes from './book-card.module.css';

export const BookCard = () => {
  const { category } = useParams();
  const { data: categoriesData } = booksAPI.useGetCategoriesQuery();
  const { data: booksData } = booksAPI.useGetListBooksQuery('');


  const currentCategory = categoriesData?.find((i) => i.path === category)?.name;

  const booksByCurrentCategory = booksData?.filter(
    ({ categories }) => categories?.filter((i) => i === currentCategory).length
  );

  const books = category === 'all' ? booksData : booksByCurrentCategory;

  return (
    <React.Fragment>
      {books &&
        books.map(({ id, image, title, authors, rating }) => (
          <NavLink to={`/books/${category}/${id}`} data-test-id='card' key={id}>
            <div className={classes.tile}>
              <BookImg url={image ? `https://strapi.cleverland.by${image.url}` : noImage} />
              {rating ? <Rating /> : <p className={classes.noRating}>еще нет оценок</p>}
              <BookCardTitle title={title} authors={authors} />
              <Button text='Забронировать' className='btnCard' />
            </div>
          </NavLink>
        ))}
    </React.Fragment>
  );
};
