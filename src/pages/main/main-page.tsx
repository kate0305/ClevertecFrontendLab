import { useState } from 'react';

import { BookList } from '../../ui/book-list';
import { NavMenu } from '../../ui/navigation-menu';

import classes from './main-page.module.css';

export const MainPage = () => {
  const [view, setView] = useState<string>('tile');

  return (
    <section className={classes.wrapper}>
      <NavMenu setView={setView} />
      <BookList view={view} />
    </section>
  );
};
