import { IconButtonProps } from '../../../utils/types/buttons';

import classes from './icon-button.module.css';

export const IconButton = ({ testID, view, isActive, toggle }: IconButtonProps) => {
  const handleClick = () => {
    toggle(view);
  }

const active = () => isActive ? classes.selected : classes.button;

  return (
    <button
      className={active()}
      type='button'
      aria-label='choice'
      onClick={handleClick}
      data-test-id={testID}
    />
  );
};
