import { useState } from 'react';

import { InputsProps } from '../../../utils/types/registration';
import { InputPrimary } from '../../input-primary';

export const FirstNameInput = ({ register, error }: InputsProps) => {
  const [value, setValue] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <InputPrimary
      {...register('firstName', {
        onChange: handleChange,
        required: 'Поле не может быть пустым',
      })}
      value={value}
      error={error}
      name='firstName'
      id='firstName'
      placeholder='Имя'
    />
  );
};
