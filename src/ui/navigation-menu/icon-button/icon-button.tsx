import list from '../../../assets/images/svg/btn-list.svg';
import tile from '../../../assets/images/svg/btn-tile.svg';
import { IconButtonProps } from '../../../utils/types/buttons';

import classes from './icon-button.module.css';

export const IconButton = ({ testID, view, isActive, toggle }: IconButtonProps) => {
  const handleClick = () => {
    toggle(view);
  }


  const setImg = (): string => {
    let name;

    if (view === 'tile') {
      name = `${tile}`;
    } else {
      name = `${list}`;
    }

    return name;
  };
const active = () => isActive ? classes.selected : classes.button;

  return (
    <button
      className={active()}
    //   style={{ backgroundImage: `url(${setImg()})` }}
      type='button'
      aria-label='choice'
      onClick={handleClick}
      data-test-id={testID}
    />
  );
};
