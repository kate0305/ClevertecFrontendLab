import { forwardRef, Ref } from 'react';

import { getHighlightedText1 } from '../../common/get-highlighted-text';
import { InputPrimaryProps } from '../../utils/types/registration';

import classes from './input-primary.module.css';

export const InputPrimary = forwardRef((props: InputPrimaryProps, ref: Ref<HTMLInputElement>) => {
  const { as: Tag = 'input', type, name, id, placeholder, labelText, mask, error, value, isNotValid, ...rest } = props;

  const setHintText = () => {
    if (error?.type === 'required' || error?.type === 'pattern') return error.message;
    if (labelText && error?.message) {
      return getHighlightedText1(labelText, error.message.split(' '));
    }

    return labelText;
  };

  return (
    <div className={classes.wrapper}>
      <Tag
        {...rest}
        ref={ref}
        className={classes.input}
        mask={mask}
        type={type}
        name={name}
        id={id}
        autoComplete='off'
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
        {setHintText()}
      </label>
    </div>
  );
});
