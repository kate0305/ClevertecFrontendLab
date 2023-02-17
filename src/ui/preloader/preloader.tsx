import classes from './preloader.module.css';


export const Preloader = () => (
  <div className={classes.wrapper} data-test-id='loader'>
    <div className={classes.preloader} />
  </div>
);
