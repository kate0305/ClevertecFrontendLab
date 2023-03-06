import { InputsProps } from '../../../utils/types/registration';
import { InputPrimary } from '../../input-primary';

export const FirstNameInput = ({ register, error,value }: InputsProps) => (
    <InputPrimary
      {...register('firstName', {
        required: 'Поле не может быть пустым',
      })}
      value={value}
      error={error}
      name='firstName'
      id='firstName'
      placeholder='Имя'
    />
  );
