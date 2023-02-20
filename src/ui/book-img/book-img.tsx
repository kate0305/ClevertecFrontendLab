import noImage from '../../assets/images/jpeg/book-no-foto.jpg'
import { BookPhoto } from '../../utils/types/book';

import classes from './book-img.module.css';

type BookImgProps = {
  url: BookPhoto;
  view?: string;
};
export const BookImg = ({ url, view }: BookImgProps) => (
  <img
    className={view === 'list' ? classes.imgList : classes.imgTile}
    src={url ? url : noImage}
    alt='book foto'
    loading='lazy'
  />
);
