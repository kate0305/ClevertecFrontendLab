import { InputsProps } from '../../../utils/types/registration';
import { InputPrimary } from '../../input-primary';

export const LastNameInput = ({ register, error, value }: InputsProps) => (
    <InputPrimary
      {...register('lastName', {
        required: 'Поле не может быть пустым',
      })}
      value={value}
      error={error}
      name='lastName'
      id='lastName'
      placeholder='Фамилия'
    />
  );
