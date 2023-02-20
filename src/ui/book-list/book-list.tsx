import React from 'react';
import { NavLink, useParams } from 'react-router-dom';

import noImage from '../../assets/images/jpeg/book-no-foto.jpg';
import { ListOfBooks } from '../../utils/types/book';
import { BookCardTitle } from '../book-card-title';
import { BookImg } from '../book-img';
import { Button } from '../buttons/btn-primary';
import { NavMenu } from '../navigation-menu';
import { Rating } from '../rating';

import classes from './book-list.module.css';

type BookListProps = {
  view: string;
  books: ListOfBooks[] | undefined;
};

export const BookList = ({ view, books }: BookListProps) => {
  const setView = () => (view === 'list' ? classes.list : classes.tile);
  const { category } = useParams();

  return (
    <div className={setView()}>
      {books &&
        books.map(({ id, image, title, authors, rating }) => (
          <NavLink to={`/books/${category}/${id}`} data-test-id='card' key={id}>
            <div className={view === 'list' ? classes.wrapperList : classes.wrapperTile}>
              <BookImg url={image ? `https://strapi.cleverland.by${image.url}` : noImage} view={view} />
              {view === 'tile' ? <Rating rating={rating} /> : ''}
              <div className={view === 'list' ? classes.content : ''}>
                <BookCardTitle title={title} authors={authors} view={view} />
                <div className={view === 'list' ? classes.buttons : ''}>
                  {view === 'list' ? <Rating rating={rating} /> : null}
                  <Button text='Забронировать' className='btnCard' />
                </div>
              </div>
            </div>
          </NavLink>
        ))}
    </div>
  );
};
