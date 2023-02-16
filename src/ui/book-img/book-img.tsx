import noImage from '../../assets/images/jpeg/book-no-foto.jpg'
import { BookPhoto } from '../../utils/types/book';

import classes from './book-img.module.css';

export const BookImg = ({ url }: BookPhoto) => <img className={classes.img} src={url ? url : noImage} alt='book foto' />;
