import React from 'react';

import img from '../../assets/images/jpeg/book-no-foto.jpg';
import { BookPhoto } from '../../utils/types/book';
import { Slider } from '../swiper';

import classes from './photo.module.css';

type BookPhotoProps = {
  images: BookPhoto[] | null;
};

export const BookMainPhoto = ({ images }: BookPhotoProps) => {
  const urls = images?.flatMap((image) => image.url || []).map((image) => `https://strapi.cleverland.by${image}`);

  return (
    <React.Fragment>
      {!urls && <img className={classes.bookFoto} src={img} alt='book' />}
      {urls && (urls.length > 1 ? (
        <Slider photos={urls} />
      ) : (
        <img className={classes.bookFoto} src={urls[0]} alt='book' />
      ))}
    </React.Fragment>
  );
};
