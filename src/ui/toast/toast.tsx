import classes from './toast.module.css';

type ToastProps = {
  onClose: () => void;
};
export const Toast = ({ onClose }: ToastProps) => (
  <div className={classes.wrapper} data-test-id='error'>
    <h1 className={classes.text}>Что-то пошло не так. Обновите страницу через некоторое время.</h1>
    <button className={classes.btn} onClick={onClose} type='button' aria-label='close' />
  </div>
);
