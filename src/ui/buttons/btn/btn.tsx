import classes from './btn.module.css';

export const Button = () => (
  <button className={classes.btn} type='button' data-test-id='button-rating'>
    Оценить книгу
  </button>
);
