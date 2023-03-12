import { useState } from 'react';

import { useAppDispatch } from '../../hooks/redux';
import { logOut } from '../../store/reducers/user-slice';

import { ButtonProfile } from './button';

import classes from './user.module.css';

export const User = () => {
    const dispatch = useAppDispatch();
    const [isShow, toggleShow] = useState<boolean>(false);

    const toggleShowProfile = () => {
      toggleShow(!isShow);
    };

    const logOutUser = () => {
      dispatch(logOut())
    };

    return (
      <div className={classes.wrapper}>
        <p className={classes.name}>Привет, Иван!</p>
        <button className={classes.avatar} onClick={toggleShowProfile} type='button' aria-label='avatar' />
        <div className={isShow ? classes.container : classes.hide}>
          <ButtonProfile text='Профиль' />
          <ButtonProfile text='Выход' onClick={logOutUser} dataTest='exit-button' />
        </div>
      </div>
    );};
