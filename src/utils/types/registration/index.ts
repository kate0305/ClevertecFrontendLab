import { ElementType } from 'react';
import { FieldError,UseFormGetValues,UseFormRegister } from 'react-hook-form';

export type RegistrationFormValues = {
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
};

export type InputPrimaryProps = {
  as?: ElementType;
  mask?: Array<string | RegExp>;
  type?: 'text' | 'password' | 'email' | 'tel';
  name: string;
  id: string;
  placeholder: string;
  labelText?: string;
  error: FieldError | undefined;
  value: string | undefined;
  isNotValid?: boolean;
  //   getValues: UseFormGetValues<RegistrationFormValues>;
};

export type InputsProps = {
  register: UseFormRegister<RegistrationFormValues>;
  error: FieldError | undefined;
  isDirty?: boolean | undefined;
  value?: string | undefined;
};
