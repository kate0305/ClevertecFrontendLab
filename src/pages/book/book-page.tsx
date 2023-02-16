import React from 'react';
import { useParams } from 'react-router-dom';

import { booksAPI } from '../../services/book-sevice';
import { ButtonBook } from '../../ui/buttons/btn-book';
import { Comments } from '../../ui/comments';
import { BookMainPhoto } from '../../ui/photo';

import classes from './book-page.module.css';

export const BookPage = () => {
  const { bookID } = useParams();
  const { data: bookInfo, error, isLoading } = booksAPI.useGetBookQuery(bookID as string);

  return (
    <React.Fragment>
      {isLoading && <h1>LOADING</h1>}
      {error && <h1>ERROR</h1>}
      {bookInfo && (
        <section className={classes.wrapper}>
          <div className={classes.routing}>
            Бизнес книги <span className={classes.separator}>/</span> Грокаем алгоритмы. Иллюстрированное пособие для
            программистов и любопытствующих
          </div>
          <div className={classes.mainInfo}>
            <BookMainPhoto images={bookInfo.images}/>
            <div className={classes.wrap}>
              <div className={classes.bookData}>
                <h1 className={classes.title}>{bookInfo.title}</h1>
                <p className={classes.autor}>{bookInfo.authors}</p>
                <ButtonBook />
              </div>
              <div className={classes.discription}>
                <h5 className={classes.subTitle}>О книге</h5>
                <p className={classes.text}>{bookInfo.description}</p>
                {/* <p className={classes.textLast}>
                  Откройте великолепно иллюстрированную книгу и вы сразу поймете, что алгоритмы — это просто. А грокать
                  алгоритмы — это веселое и увлекательное занятие.
                </p> */}
              </div>
            </div>
          </div>
          <div className={classes.bookDop}>
            <div className={classes.rating}>
              <h5 className={classes.subTitle}>Рейтинг</h5>
              <div className={classes.ratingData}>
                <span className={classes.stars}>{bookInfo.rating}</span>
              </div>
            </div>
            <div className={classes.bookInfo}>
              <h5 className={classes.subTitle}>Подробная информация</h5>
              <div className={classes.columns}>
                <div className={classes.col12}>
                  <div className={classes.column1}>
                    <p className={classes.info}>Издательство</p>
                    <p className={classes.info}>Год издания</p>
                    <p className={classes.info}>Страниц</p>
                    <p className={classes.info}>Переплёт</p>
                    <p className={classes.info}>Формат</p>
                  </div>
                  <div className={classes.column2}>
                    <p className={classes.discriphion}>{bookInfo.publish}</p>
                    <p className={classes.discriphion}>{bookInfo.issueYear}</p>
                    <p className={classes.discriphion}>{bookInfo.pages}</p>
                    <p className={classes.discriphion}>{bookInfo.cover}</p>
                    <p className={classes.discriphion}>{bookInfo.format}</p>
                  </div>
                </div>
                <div className={classes.col34}>
                  <div className={classes.column3}>
                    <p style={{ paddingBottom: '18px' }} className={classes.info}>
                      Жанр
                    </p>
                    <p className={classes.info}>Вес</p>
                    <p className={classes.info}>ISBN</p>
                    <p className={classes.info}>Изготовитель</p>
                  </div>
                  <div className={classes.column4}>
                    <p className={classes.discriphion}>Компьютерная литература</p>
                    <p className={classes.discriphion}>{bookInfo.weight}</p>
                    <p className={classes.discriphion}>{bookInfo.ISBN}</p>
                    <p className={classes.discriphion}>{bookInfo.producer}</p>
                  </div>
                </div>
              </div>
            </div>
            <Comments />
          </div>
        </section>
      )}
    </React.Fragment>
  );
};
