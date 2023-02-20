import { useState } from 'react';
import classnames from 'classnames/bind';

import { NavMenuProps } from '../../utils/types/navigation-menu';

import { FilterButton } from './filter-button';
import { IconButton } from './icon-button';
import { SearchBar } from './search';

import classes from './nav-menu.module.css';

const style = classnames.bind(classes);

export const NavMenu = ({ setView }: NavMenuProps) => {
  const [isOpenSearch, setOpenSearch] = useState<boolean>(false);

  const className = style({
    container: true,
    hidden: isOpenSearch,
  });

  return (
    <div className={classes.bar}>
      <div className={classes.container}>
        <SearchBar handleClick={setOpenSearch} isOpen={isOpenSearch} />
        <FilterButton isHidden={isOpenSearch} />
      </div>
      <div className={className}>
        <IconButton view='tile' testID='button-menu-view-window' toggle={setView} isActive={true} />
        <IconButton view='list' testID='button-menu-view-list' toggle={setView} isActive={false} />
      </div>
    </div>
  );
};
