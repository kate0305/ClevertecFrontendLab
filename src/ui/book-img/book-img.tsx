import { Book } from '../../utils/types/book';

import classes from './book-img.module.css';

export const BookImg = ({ images }: Book) => <img className={classes.img} src={images[0]} alt='book foto' />;
