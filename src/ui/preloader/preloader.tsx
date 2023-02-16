import classes from './preloader.module.css';


export const Preloader = () => (
  <div className={classes.wrapper} data-testid='loader'>
    <div className={classes.preloader} />
  </div>
);
