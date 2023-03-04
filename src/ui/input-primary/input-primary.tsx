import { forwardRef, Ref, useState } from 'react';

import { getHighlightedText1 } from '../../common/get-highlighted-text';
import { InputPrimaryProps } from '../../utils/types/registration';

import classes from './input-primary.module.css';

export const InputPrimary = forwardRef((props: InputPrimaryProps, ref: Ref<HTMLInputElement>) => {
  const { as: Tag = 'input', type, name, id, placeholder, labelText, mask, error, value, uniqueStyle, ...rest } = props;

  const [isNotValid, setNotValid] = useState<boolean>(false);

  const handleBlur = () => {
    if (error) setNotValid(true);
    else setNotValid(false);
  };

  return (
    <div className={classes.wrapper}>
      <Tag
        {...rest}
        ref={ref}
        className={uniqueStyle ? `${classes[uniqueStyle]} ${classes.input}` : classes.input}
        mask={mask}
        type={type}
        name={name}
        id={id}
        autoComplete='off'
        onBlur={handleBlur}
      />
      <span className={value ? classes.placeholder_top : classes.placeholder}>{placeholder}</span>
      <hr className={error?.message ? `${classes.separator_err} ${classes.separator}` : classes.separator} />
      <label
        className={
          error?.type === 'required' || error?.type === 'pattern' || isNotValid ? classes.error : classes.label
        }
        htmlFor={name}
        data-test-id='hint'
      >
        {error?.type === 'required' || error?.type === 'pattern'
          ? error.message
          : isNotValid
          ? labelText
          : labelText && error?.message && getHighlightedText1(labelText, error.message.split(' '))}
      </label>
    </div>
  );
});
