import { ButtonBook } from '../../ui/buttons/btn-book';
import { Comments } from '../../ui/comments';
import { BookMainPhoto } from '../../ui/photo';

import classes from './book-page.module.css';

export const BookPage = () => (
      <section className={classes.wrapper}>
        <div className={classes.routing}>
          Бизнес книги <span className={classes.separator}>/</span> Грокаем алгоритмы. Иллюстрированное пособие для
          программистов и любопытствующих
        </div>
        <div className={classes.mainInfo}>
          <BookMainPhoto />
          <div className={classes.wrap}>
            <div className={classes.bookData}>
              <h1 className={classes.title}>
                Грокаем алгоритмы. Иллюстрированное пособие для программистов и любопытствующих
              </h1>
              <p className={classes.autor}>Адитья Бхаргава, 2019</p>
              <ButtonBook />
            </div>
            <div className={classes.discription}>
              <h5 className={classes.subTitle}>О книге</h5>
              <p className={classes.text}>
                Алгоритмы — это всего лишь пошаговые алгоритмы решения задач, и большинство таких задач уже были кем-то
                решены, протестированы и проверены. Можно, конечно, погрузится в глубокую философию гениального Кнута,
                изучить многостраничные фолианты с доказательствами и обоснованиями, но хотите ли вы тратить на это свое
                время?
              </p>
              <p className={classes.textLast}>
                Откройте великолепно иллюстрированную книгу и вы сразу поймете, что алгоритмы — это просто. А грокать
                алгоритмы — это веселое и увлекательное занятие.
              </p>
            </div>
          </div>
        </div>
        <div className={classes.bookDop}>
          <div className={classes.rating}>
            <h5 className={classes.subTitle}>Рейтинг</h5>
            <div className={classes.ratingData}>
              <span className={classes.stars}>4.3</span>
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
                  <p className={classes.discriphion}>Питер</p>
                  <p className={classes.discriphion}>2019</p>
                  <p className={classes.discriphion}>288</p>
                  <p className={classes.discriphion}>Мягкая обложка</p>
                  <p className={classes.discriphion}>70х100</p>
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
                  <p className={classes.discriphion}>370 г</p>
                  <p className={classes.discriphion}>978-5-4461-0923-4</p>
                  <p className={classes.discriphion}>
                    ООО «Питер Мейл». РФ, 198 206, г. Санкт-Петербург, Петергофское ш, д. 73, лит. А29
                  </p>
                </div>
              </div>
            </div>
          </div>
          <Comments />
        </div>
      </section>
    );
