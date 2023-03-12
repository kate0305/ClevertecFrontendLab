import { useEffect, useState } from 'react';
import MaskedInput from 'react-text-mask';

import { InputsTelProps } from '../../../utils/types/registration';
import { InputPrimary } from '../../input-primary';

export const PhoneInput = ({ error, value }: InputsTelProps) => {

  useEffect(() => {
      console.log(value);
      console.log(error);
  }, [error, value])

  const mask = ['+', '3', '7', '5', ' ', '(', /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/];

  return (
    <InputPrimary
      value={value}
      as={MaskedInput}
      mask={mask}
      //   {...register('phone', {
      //     required: 'Поле не может быть пустым',
      //     pattern: {
      //       value: /^\+375(\s+)?\(?(29|33|44)\)?(\s+)?[0-9]{3}-[0-9]{2}-[0-9]{2}$/,
      //       message: 'В формате +375 (xx) xxx-xx-xx',
      //     },
      //   })}
      error={error}
      type='tel'
      name='phone'
      id='phone'
      placeholder='Номер телефона'
      labelText='В формате +375 (xx) xxx-xx-xx'
    />
  );
};
