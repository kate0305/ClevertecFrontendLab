import { NavLink, useParams } from 'react-router-dom';

import noImage from '../../assets/images/jpeg/book-no-foto.jpg';
import { booksAPI } from '../../services/book-sevice';
import { BookCardTitle } from '../book-card-title';
import { BookImg } from '../book-img';
import { Button } from '../buttons/btn-primary';
import { Rating } from '../rating';

import classes from './book-list.module.css';

type BookListProps = {
  view: string;
};

export const BookList = ({ view }: BookListProps) => {
  const setView = () => (view === 'list' ? classes.list : classes.tile);
  const { category } = useParams();
  const { data: categoriesData } = booksAPI.useGetCategoriesQuery();
  const { data: booksData } = booksAPI.useGetListBooksQuery('');

  const currentCategory = categoriesData?.find((i) => i.path === category)?.name;

  const booksByCurrentCategory = booksData?.filter(
    ({ categories }) => categories?.filter((i) => i === currentCategory).length
  );

  const books = category === 'all' ? booksData : booksByCurrentCategory;

  return (
    <div className={setView()}>
      {books &&
        books.map(({ id, image, title, authors, rating }) => (
          <NavLink to={`/books/${category}/${id}`} data-test-id='card' key={id}>
            <div className={view === 'list' ? classes.wrapperList : classes.wrapperTile}>
              <BookImg url={image ? `https://strapi.cleverland.by${image.url}` : noImage} view={view} />
              <div className={view === 'list' ? classes.content : ''}>
                <BookCardTitle title={title} authors={authors} view={view} />
                <div className={view === 'list' ? classes.buttons : ''}>
                  {rating ? <Rating /> : <p className={classes.noRating}>еще нет оценок</p>}
                  <Button text='Забронировать' className='btnCard' />
                </div>
              </div>
            </div>
          </NavLink>
        ))}
    </div>
  );
};
