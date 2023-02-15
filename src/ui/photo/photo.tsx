import React from 'react';
import { useParams } from 'react-router-dom';

import img from '../../assets/images/jpeg/book-no-foto.jpg';
import { booksFoto } from '../../data/books-photos';
import { Slider } from '../swiper';

import classes from './photo.module.css';

export const BookMainPhoto = () => {
  const { bookID } = useParams();
  const photo = booksFoto.find((i) => i.id === bookID);
  const photos = photo?.images;

  return (
    <React.Fragment>
      {!photos && <img className={classes.bookFoto} src={img} alt='book' />}
      {photos && photos.length > 1 && <Slider />}
      {photos && photos.length === 1 && <img className={classes.bookFoto} src={photos[0]} alt='book' />}
    </React.Fragment>
  );
};
