import classnames from 'classnames/bind';

import { FilterInputProps } from '../../../utils/types/navigation-menu';

import classes from './filter-button.module.css';

const style = classnames.bind(classes);

export const FilterButton = ({ isHidden }: FilterInputProps) => {
    const className = style({
      filter: true,
      hidden: isHidden,
    });

return (
  <div>
    <select className={className} name='rating' id='rating' value='По рейтингу' disabled={true}>
      <option value='По рейтингу'>По рейтингу</option>
    </select>
  </div>
);};
