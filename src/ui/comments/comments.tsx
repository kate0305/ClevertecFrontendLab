import { useState } from 'react';

import userFoto from '../../assets/images/jpeg/user-review.jpg';
import { Button } from '../buttons/btn';
import { ButtonDropdown } from '../buttons/btn-dropdown';

import classes from './comments.module.css';

export const Comments = () => {
    const [isOpen, setOpen] = useState<boolean>(false)

    const toggleReviews = () => setOpen(!isOpen);

    return (
      <div className={classes.reviews}>
        <div className={classes.container}>
          <h5 className={classes.title}>
            Отзывы
            <span className={classes.amount}>2</span>
          </h5>
          <ButtonDropdown isOpen={isOpen} onClick={toggleReviews} isColor={false} />
        </div>
        {isOpen && (
          <div className={classes.reviewsWrapper}>
            <div className={classes.review}>
              <div className={classes.userData}>
                <img src={userFoto} alt='user foto' />
                <div className={classes.userDescription}>
                  <p className={classes.name}>Иван Иванов</p>
                  <p className={classes.date}>5 января 2019</p>
                </div>
              </div>
              <div className={classes.reviewStars} />
            </div>
            <div className={classes.review}>
              <div className={classes.userData}>
                <img src={userFoto} alt='user foto' />
                <div className={classes.userDescription}>
                  <p className={classes.name}>Иван Иванов</p>
                  <p className={classes.date}>5 января 2019</p>
                </div>
              </div>
              <div className={classes.reviewStars} />
              <p className={classes.reviewText}>
                Учитывая ключевые сценарии поведения, курс на социально-ориентированный национальный проект не оставляет
                шанса для анализа существующих паттернов поведения. Для современного мира внедрение современных методик
                предоставляет широкие возможности для позиций, занимаемых участниками в отношении поставленных задач.
                Как уже неоднократно упомянуто, сделанные на базе интернет-аналитики выводы будут в равной степени
                предоставлены сами себе. Вот вам яркий пример современных тенденций — глубокий уровень погружения
                создаёт предпосылки для своевременного выполнения сверхзадачи. И нет сомнений, что акционеры крупнейших
                компаний, инициированные исключительно синтетически, превращены в посмешище, хотя само их существование
                приносит несомненную пользу обществу.
              </p>
            </div>
            <div style={{ paddingBottom: '0' }} className={classes.review}>
              <div className={classes.userData}>
                <img src={userFoto} alt='user foto' />
                <div className={classes.userDescription}>
                  <p className={classes.name}>Иван Иванов</p>
                  <p className={classes.date}>5 января 2019</p>
                </div>
              </div>
              <div className={classes.reviewStars} />
            </div>
          </div>
        )}
        <Button />
      </div>
    );};
