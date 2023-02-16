import React from 'react';
import { useParams } from 'react-router-dom';

import img from '../../assets/images/jpeg/book-no-foto.jpg';
import { booksFoto } from '../../data/books-photos';
import { BookPhoto } from '../../utils/types/book';
import { Slider } from '../swiper';

import classes from './photo.module.css';

type BookPhotoProps = {
  images: BookPhoto[] | null;
};

export const BookMainPhoto = ({ images }: BookPhotoProps) => {
  const urls = images?.map((image) => image.url);
  console.log(urls);

  return (
    <React.Fragment>
      {!urls && <img className={classes.bookFoto} src={img} alt='book' />}
      {urls && urls.length > 1 && <Slider />}
      {urls && urls[0] && (
        <img className={classes.bookFoto} src={`https://strapi.cleverland.by${urls[0]}`} alt='book' />
      )}
    </React.Fragment>
  );
};
