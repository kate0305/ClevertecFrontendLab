import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { Controller,SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import MaskedInput from 'react-text-mask';

import { useAppDispatch } from '../../../hooks/redux';
import { booksAPI } from '../../../services/book-sevice';
import { setRegistrationData } from '../../../store/reducers/user-slice';
import { RegistrationFormValues } from '../../../utils/types/registration';
import { Button } from '../../buttons/btn-primary';
import { InputPrimary } from '../../input-primary';
import { Preloader } from '../../preloader';
import { EmailInput, FirstNameInput, LastNameInput, LoginInput, PasswordInput, PhoneInput } from '../inputs';
import { FormNotice } from '../registration-form';

type FormProps = {
  step: number;
  setStep: Dispatch<SetStateAction<number>>;
  closeForm: () => void;
  setTypeErr: (err: FormNotice) => void;
};

export const Form = ({ step, setStep, closeForm, setTypeErr }: FormProps) => {
  const dispatch = useAppDispatch();

  const {
    register,
    trigger,
    formState: { errors, isSubmitSuccessful },
    watch,
    handleSubmit,
    getFieldState,
    reset,
    control,
  } = useForm<RegistrationFormValues>({ mode: 'onChange' });

  const { isDirty } = getFieldState('password');

  const [registrationUser, { isLoading, isSuccess, error, isError }] = booksAPI.useRegistrationUserMutation();

  //   console.log(errPsw);
  const [cookies, setCookie] = useCookies(['clever']);
  const navigate = useNavigate();
  const [disabled, setbtnDisabled] = useState<boolean>(false);

  const buttonText = ['следующий шаг', 'последний шаг', 'зарегистрироваться'];

  const onSubmit: SubmitHandler<RegistrationFormValues> = async (data: RegistrationFormValues) => {
    dispatch(setRegistrationData(data));
    console.log('data', data);
    registrationUser(data);
    // try {
    //   const result = await registrationUser(data).unwrap();

    //   if (result) {
    //     // dispatch(setUser({ user: result.user, token: result.jwt}));
    //     setCookie('clever', result.jwt, { path: '/' });
    //   }
    // } catch (err) {
    //   console.log(err);
    // }
    // const result = await registrationUser(data)
    //   .unwrap()
    // //   .catch((error) => console.log(error));

    // dispatch(setUser(result));
  };

  useEffect(() => {
    if (isSuccess) {
      console.log('Success');
      setTypeErr('success');
      dispatch(setRegistrationData(null));
      closeForm();
    }
    if (error) {
      if ('status' in error) {
        // you can access all properties of `FetchBaseQueryError` here
        //  const errMsg = 'error' in error ? error.error : JSON.stringify(error.data);
        console.log(error.status);
        if (error.status === 400) {
          setTypeErr('err400');
          reset();
          closeForm();
        } else {
          setTypeErr('err');
          closeForm();
        }
        // onSubmit(data);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error, isLoading, isSuccess, navigate, closeForm, reset, setTypeErr]);

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

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

  const mask = ['+', '3', '7', '5', ' ', '(', /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/];

  const currentInputs = () => {
    switch (step) {
      case 0:
        return (
          <React.Fragment>
            <LoginInput register={register} error={errors.username} value={watch('username')} />
            <PasswordInput
              register={register}
              error={errors.password}
              isDirty={isDirty}
              value={watch('password')}
            />
          </React.Fragment>
        );
      case 1:
        return (
          <React.Fragment>
            <FirstNameInput register={register} error={errors.firstName} value={watch('firstName')} />
            <LastNameInput register={register} error={errors.lastName} value={watch('lastName')} />
          </React.Fragment>
        );
      case 2:
        return (
          <React.Fragment>
            <Controller
              name='phone'
              control={control}
              defaultValue=''
              rules={{
                required: 'Поле не может быть пустым',
                pattern: {
                  value: /^\+375(\s+)?\(?(29|33|44)\)?(\s+)?[0-9]{3}-[0-9]{2}-[0-9]{2}$/,
                  message: 'В формате +375 (xx) xxx-xx-xx',
                },
              }}
              render={({ field, fieldState: { error } }) => <PhoneInput error={error} value={field.value} />}
              //   register={register}
              //   error={errors.phone}
              //   value={watch('phone')}
            />
            <EmailInput register={register} error={errors.email} value={watch('email')} />
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

  if (isLoading) return <Preloader />;

  return (
    <React.Fragment>
      <form data-test-id='register-form' id='form' onChange={handleFormChange}>
        {currentInputs()}
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
      </form>
      {/* <div className={classes.footer}>
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
      </div> */}
    </React.Fragment>
  );
};
