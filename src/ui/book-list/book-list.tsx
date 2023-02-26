import { NavLink, useParams } from 'react-router-dom';

import noImage from '../../assets/images/jpeg/book-no-foto.jpg';
import { getHighlightedText } from '../../common/get-highlighted-text';
import { useAppSelector } from '../../hooks/redux';
import { ListOfBooks } from '../../utils/types/book';
import { BookCardTitle } from '../book-card-title';
import { BookImg } from '../book-img';
import { Button } from '../buttons/btn-primary';
import { EmptyList } from '../empty-list-books';
import { Rating } from '../rating';

import classes from './book-list.module.css';

type BookListProps = {
  view: string;
  books: ListOfBooks[] | undefined;
};

export const BookList = ({ view, books }: BookListProps) => {
  const setView = () => (view === 'list' ? classes.list : classes.tile);
  const { category } = useParams();
  const { searchValue } = useAppSelector((state) => state.booksReduser);

  return (
    <div className={setView()}>
      {books?.length ? (
        books.map(({ id, image, title, authors, rating }) => (
          <NavLink to={`/books/${category}/${id}`} data-test-id='card' key={id} className={classes.book}>
            <div className={view === 'list' ? classes.wrapperList : classes.wrapperTile}>
              <BookImg url={image ? `https://strapi.cleverland.by${image.url}` : noImage} view={view} />
              {view === 'tile' ? <Rating rating={rating} /> : ''}
              <div className={view === 'list' ? classes.content : ''}>
                <BookCardTitle title={getHighlightedText(title, searchValue)} authors={authors} view={view} />
                <div className={view === 'list' ? classes.buttons : ''}>
                  {view === 'list' ? <Rating rating={rating} /> : null}
                  <Button text='Забронировать' className='btnCard' />
                </div>
              </div>
            </div>
          </NavLink>
        ))
      ) : (
        <EmptyList text='По запросу ничего не найдено' dataTestId='search-result-not-found' />
      )}
    </div>
  );
};
