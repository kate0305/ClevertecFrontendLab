import React from 'react';
import { NavLink, useParams } from 'react-router-dom';

import noImage from '../../../assets/images/jpeg/book-no-foto.jpg';
import { BookCardTitle } from '../../book-card-title';
import { BookImg } from '../../book-img';
import { ButtonBookCard } from '../../buttons/btn-book-card';
import { useBooksData } from '../../layout-main-page/layout-main-page';
import { Rating } from '../../rating';

import classes from './book-card.module.css';

export const BookCard = () => {
  const { category } = useParams();
  const { booksData, categoriesData } = useBooksData();

  const currentCategory = categoriesData.find((i) => i.path === category)?.name;

  const booksByCurrentCategory = booksData?.filter(
    ({ categories }) => categories?.filter((i) => i === currentCategory).length
  );

  const books = category === 'all' ? booksData : booksByCurrentCategory;

  return (
    <React.Fragment>
      {books.map(({ id, image }) => (
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
