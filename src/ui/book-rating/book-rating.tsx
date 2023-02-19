import classes from './book-rating.module.css';

type BookRatingProps = {
  rating: number | null;
};

export const BookRating = ({rating}: BookRatingProps) => (
  <div className={classes.rating}>
    <h5 className={classes.subTitle}>Рейтинг</h5>
    <div className={classes.ratingData}>
      <span className={classes.stars}>{rating}</span>
    </div>
  </div>
);
