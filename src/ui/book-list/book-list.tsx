
import { BookCardList } from '../book-card/book-card-list';
import { BookCard } from '../book-card/book-card-tile';

import classes from './book-list.module.css';

type BookListProps = {
  view: string;
};

export const BookList = ({ view }: BookListProps) => {
  const setView = () => (view === 'list' ? classes.list : classes.tile);

  return (
    <div className={setView()}>
      {view === 'list' ? <BookCardList /> : <BookCard />}
    </div>
  );
};
