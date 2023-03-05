import { useState } from 'react';

import { InputsProps } from '../../../utils/types/registration';
import { InputPrimary } from '../../input-primary';

export const LoginInput = ({ register, error }: InputsProps) => {
  const [value, setValue] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <InputPrimary
      {...register('username', {
        onChange: handleChange,
        required: 'Поле не может быть пустым',
        validate: (v) => {
          const arr = [];
          const checkNumber = /\d/.test(v) || 'цифры';
          const checkLetter = /^[A-Z\d]+$/i.test(v) || 'латинский алфавит';

          if (typeof checkNumber === 'string') arr.push(checkNumber);
          if (typeof checkLetter === 'string') arr.push(checkLetter);

          return arr.join(' ');
        },
      })}
      error={error}
      name='username'
      id='username'
      placeholder='Придумайте логин для входа'
      labelText='Используйте для логина латинский алфавит и цифры'
      value={value}
    />
  );
};
