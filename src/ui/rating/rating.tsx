import classes from './rating.module.css';

type RatingProps = {
  rating: number | null;
};
export const Rating = ({ rating }: RatingProps) => (
  <div className={classes.wrapper}>
    {rating ? <div className={classes.rating} /> : <p className={classes.noRating}>еще нет оценок</p>}
  </div>
);
