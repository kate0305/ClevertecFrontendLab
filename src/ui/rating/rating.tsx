import classes from './rating.module.css';

export const Rating = () => {
  const hasRating = (rating: number) => (rating ? true : false);

  return (
    <div className={classes.wrapper}>
      {hasRating(1) ? <div className={classes.rating}/> : <p className={classes.text}>еще нет оценок</p>}
    </div>
  );
};
