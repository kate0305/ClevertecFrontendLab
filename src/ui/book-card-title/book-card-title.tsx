import classes from './book-card-title.module.css';

export const BookCardTitle = () => (
  <div className={classes.wrapper}>
    <h4 className={classes.title}>Грокаем алгоритмы. Иллюстрированное пособие для программистов и любопытству...</h4>
    <p className={classes.autor}>Адитья Бхаргава, 2019</p>
  </div>
);
