import React, { Dispatch, SetStateAction, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { RegistrationFormValues } from '../../../utils/types/registration';
import { Button } from '../../buttons/btn-primary';
import { EmailInput, FirstNameInput, LastNameInput, LoginInput, PasswordInput, PhoneInput } from '../inputs';

import classes from '../registration-form.module.css';

type FormProps = {
  step: number;
  setStep: Dispatch<SetStateAction<number>>;
};

export const Form = ({ step, setStep }: FormProps) => {
  const {
    register,
    trigger,
    getValues,
    formState: { errors },
    handleSubmit,
    getFieldState,
  } = useForm<RegistrationFormValues>({ mode: 'onChange' });

  const { isDirty } = getFieldState('password');

//   console.log(errPsw);

  const [disabled, setbtnDisabled] = useState<boolean>(false);

  const buttonText = ['Cледующий шаг', 'Последний шаг', 'Зарегистрироваться'];

  const onSubmit: SubmitHandler<RegistrationFormValues> = (data: RegistrationFormValues) => {
    console.log('data', data);
  };

  const handleFormChange = () => {
    if (disabled) setbtnDisabled(false);
  };

  const handleNextStep = async () => {
    let isFieldValid = false;

    if (step === 0) {
      isFieldValid = await trigger(['username', 'password']);
    }
    if (step === 1) {
      isFieldValid = await trigger(['firstName', 'lastName']);
    }
    if (step === 2) {
      isFieldValid = await trigger(['phone', 'email']);
    }

    return isFieldValid ? setStep(step + 1) : setbtnDisabled(true);
  };

  const currentInputs = () => {
    switch (step) {
      case 0:
        return (
          <React.Fragment>
            <LoginInput register={register} error={errors.username} value={getValues('username')} />
            <PasswordInput
              register={register}
              error={errors.password}
              isDirty={isDirty}
              value={getValues('password')}
            />
          </React.Fragment>
        );
      case 1:
        return (
          <React.Fragment>
            <FirstNameInput register={register} error={errors.firstName} value={getValues('firstName')} />
            <LastNameInput register={register} error={errors.lastName} value={getValues('lastName')} />
          </React.Fragment>
        );
      case 2:
        return (
          <React.Fragment>
            <PhoneInput register={register} error={errors.phone} value={getValues('phone')} />
            <EmailInput register={register} error={errors.email} value={getValues('email')} />
          </React.Fragment>
        );
      default:
        return (
          <React.Fragment>
            <LoginInput register={register} error={errors.username} />
            <PasswordInput register={register} error={errors.password} />
          </React.Fragment>
        );
    }
  };

  return (
    <React.Fragment>
      <form data-test-id='register-form' id='form' onChange={handleFormChange}>
        {currentInputs()}
      </form>
      <div className={classes.footer}>
        <Button
          disabled={disabled}
          form='form'
          text={buttonText[step]}
          className='btnRegistration'
          id='btn'
          //   type={step === 2 ? 'submit' : 'button'}
          onClick={step === 2 ? handleSubmit(onSubmit) : handleNextStep}
          type='button'
        />
        <div className={classes.container}>
          <p className={classes.question}>Есть учётная запись?</p>
          <button className={classes.enter} type='button'>
            Войти
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};
