import { useState } from 'react';

import { InputsProps } from '../../../utils/types/registration';
import { InputPrimary } from '../../input-primary';

export const PhoneInput = ({ register, error, value }: InputsProps) => {

const mask = ''

  return (
    <InputPrimary
      value={value}
      // as={MaskedInput}
      // mask={[
      //   '+',
      //   '3',
      //   '7',
      //   '5',
      //   ' ',
      //   '(',
      //   /[2-4]/,
      //   /(2|5|3|4)/,
      //   ')',
      //   ' ',
      //   /\d/,
      //   /\d/,
      //   /\d/,
      //   '-',
      //   /\d/,
      //   /\d/,
      //   '-',
      //   /\d/,
      //   /\d/,
      // ]}
      {...register('phone', {
        required: 'Поле не может быть пустым',
      })}
      error={error}
      type='tel'
      name='phone'
      id='phone'
      placeholder='Номер телефона'
      labelText='В формате +375 (xx) xxx-xx-xx'
    />
  );
};