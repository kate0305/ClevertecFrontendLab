import { NavLink, useLocation } from 'react-router-dom';

import classes from './bread-crumbs.module.css';

type BreadCrumbsProps = {
  title: string | undefined;
  currentCategory: string | undefined;
};

export const BreadCrumbs = ({ title, currentCategory }: BreadCrumbsProps) => {
  const { pathname } = useLocation();
  const path = pathname.split('/')[2];

  return (
    <div className={classes.wrapper}>
      <div className={classes.content}>
        <NavLink to={`/books/${path}`} data-test-id='breadcrumbs-link'>
          {currentCategory ? currentCategory : 'Все книги'}
        </NavLink>
        <span className={classes.separator}>/</span>
        <span data-test-id='book-name'>{title ? title : ''}</span>
      </div>
    </div>
  );
};
