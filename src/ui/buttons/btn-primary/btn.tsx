import classes from './btn.module.css';

type ButtonProps = {
  text: string;
  dataTestId?: string;
  className: string;
};

export const Button = ({ text, dataTestId, className }: ButtonProps) => (
  <button className={`${classes.btn} ${classes[className]}`} type='button' data-test-id={dataTestId}>
    {text}
  </button>
);
