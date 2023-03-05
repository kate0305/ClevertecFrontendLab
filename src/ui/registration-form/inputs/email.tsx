import { useState } from 'react';

import { InputsProps } from '../../../utils/types/registration';
import { InputPrimary } from '../../input-primary';

export const EmailInput = ({ register, error }: InputsProps) => {
  const [value, setValue] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <InputPrimary
      {...register('email', {
        onChange: handleChange,
        required: 'Поле не может быть пустым',
        pattern: {
          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
          message: 'Введите корректный email',
        },
      })}
      value={value}
      error={error}
      type='email'
      name='email'
      id='email'
      placeholder='E-mail'
    />
  );
};
