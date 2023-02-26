import classes from './book-card-title.module.css';

type BookCardTitleProps = {
  title: JSX.Element[];
  authors: string[] | null;
  view?: string;
};

export const BookCardTitle = ({ title, authors, view }: BookCardTitleProps) => (
  <div className={view === 'list' ? '' : classes.wrapper}>
    <h4 className={view === 'list' ? classes.titleList : classes.titleTile}>{title}</h4>
    <p className={view === 'list' ? classes.autorList : classes.autorTile}>{authors?.join(', ')}</p>
  </div>
);
