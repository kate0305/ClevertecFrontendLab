import classes from './bread-crumbs.module.css';

type BreadCrumbsProps = {
  title: string;
  currentCategory: string | undefined;
};

export const BreadCrumbs = ({ title, currentCategory }: BreadCrumbsProps) => (
  <div className={classes.wrapper}>
    <div className={classes.content}>
      {currentCategory ? currentCategory : 'Все книги'} <span className={classes.separator}>/</span> {title}
    </div>
  </div>
);
