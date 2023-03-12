import classnames from 'classnames/bind';

import classes from './btn-profile.module.css';

const style = classnames.bind(classes);

export type ButtonProfileProps = {
  onClick?: () => void;
  text: string;
  dataTest?: string;
};

export const ButtonProfile = ({ onClick, text, dataTest }: ButtonProfileProps) => {
  const dropdown = style({
    dropdown: true,
  });

  return (
    <button className={classes.button} onClick={onClick} data-test-id={dataTest} type='button'>
      {text}
    </button>
  );
};
