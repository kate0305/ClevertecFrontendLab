import { BookData } from '../../utils/types/book';

import classes from './book-detail.module.css';

type BookDetailedInfoProps = {
  bookInfo: Partial<BookData>;
  currentCategory: string | undefined;
};

export const BookDetailedInfo = ({ bookInfo, currentCategory }: BookDetailedInfoProps) => (
  <div className={classes.wrapper}>
    <h5 className={classes.subTitle}>Подробная информация</h5>
    <div className={classes.columns}>
      <div className={classes.container1}>
        <div className={classes.column1}>
          <p className={classes.info}>Издательство</p>
          <p className={classes.info}>Год издания</p>
          <p className={classes.info}>Страниц</p>
          <p className={classes.info}>Переплёт</p>
          <p className={classes.info}>Формат</p>
        </div>
        <div className={classes.column2}>
          <p className={classes.data}>{bookInfo.publish}</p>
          <p className={classes.data}>{bookInfo.issueYear}</p>
          <p className={classes.data}>{bookInfo.pages}</p>
          <p className={classes.data}>{bookInfo.cover}</p>
          <p className={classes.data}>{bookInfo.format}</p>
        </div>
      </div>
      <div className={classes.container2}>
        <div className={classes.column3}>
          <p className={classes.info}>Жанр</p>
          <p className={classes.info}>Вес</p>
          <p className={classes.info}>ISBN</p>
          <p className={classes.info}>Изготовитель</p>
        </div>
        <div className={classes.column4}>
          <p className={classes.data}>{currentCategory ? currentCategory : bookInfo.categories![0]}</p>
          <p className={classes.data}>{bookInfo.weight}</p>
          <p className={classes.data}>{bookInfo.ISBN}</p>
          <p className={classes.data}>{bookInfo.producer}</p>
        </div>
      </div>
    </div>
  </div>
);
