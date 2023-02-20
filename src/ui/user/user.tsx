import avatar from '../../assets/images/jpeg/avatar.jpg';

import classes from './user.module.css';

export const User = () => (
  <div className={classes.wrapper}>
    <p className={classes.name}>Привет, Иван!</p>
    <img className={classes.avatar} src={avatar} alt='avatar' />
  </div>
);
