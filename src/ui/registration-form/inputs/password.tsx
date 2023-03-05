import { useEffect, useState } from 'react';

import { InputsProps } from '../../../utils/types/registration';
import { ButtonEye } from '../../buttons/btn-eye';
import { InputPrimary } from '../../input-primary';

import classes from './password.module.css';

export const PasswordInput = ({ register, error, isDirty }: InputsProps) => {
  const [value, setValue] = useState('');
  const [isEyeOpen, setEyeOpen] = useState<boolean>(false);
  const [isValid, setValid] = useState<boolean>(false);

  useEffect(() => {
    if (isDirty && !error?.message) setValid(true);
    else setValid(false);
  }, [error, isDirty])

  const toggleEye = () => setEyeOpen(!isEyeOpen);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <div className={classes.wrapper}>
      <InputPrimary
        {...register('password', {
          onChange: handleChange,
          required: 'Поле не может быть пустым',
          validate: (v) => {
            const arr = [];
            const checkLenght = v.length > 8 || 'не менее 8 символов';
            const checkCapitalLetter = /[A-Z]/.test(v) || 'заглавной буквой';
            const checkNumber = /\d/.test(v) || 'цифрой';

            if (typeof checkLenght === 'string') arr.push(checkLenght);
            if (typeof checkCapitalLetter === 'string') arr.push(checkCapitalLetter);
            if (typeof checkNumber === 'string') arr.push(checkNumber);

            return arr.join(' ');
          },
        })}
        error={error}
        type={isEyeOpen ? 'text' : 'password'}
        name='password'
        id='password'
        placeholder='Пароль'
        labelText='Пароль не менее 8 символов, с заглавной буквой и цифрой'
        value={value}
        uniqueStyle='eye'
      />
      <span className={isValid ? classes.isValid : classes.hide} data-test-id='checkmark' />
      <ButtonEye onClick={toggleEye} isOpen={isEyeOpen} />
    </div>
  );
};
