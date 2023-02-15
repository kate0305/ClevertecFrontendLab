import classnames from 'classnames/bind';

import { ButtonDropdownProps } from '../../../utils/types/buttons';

import classes from './btn-dropdown.module.css';

const style = classnames.bind(classes);

export const ButtonDropdown = ({ isOpen, onClick, isColor }: ButtonDropdownProps) => {
  const dropdown = style({
    dropdown: true,
    open: isOpen,
    color: isColor,
  });

  return (
    <button
      className={dropdown}
      onClick={onClick}
      data-test-id='button-hide-reviews'
      type='button'
      aria-label='dropdown'
    />
  );
};
