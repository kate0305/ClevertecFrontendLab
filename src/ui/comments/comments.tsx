import { useState } from 'react';

import { CommentData } from '../../utils/types/book';
import { ButtonDropdown } from '../buttons/btn-dropdown';
import { Button } from '../buttons/btn-primary';

import { Comment } from './comment';

import classes from './comments.module.css';

type CommentsProps = {
  comments: CommentData[] | null;
};

export const Comments = ({ comments }: CommentsProps) => {
  const [isOpen, setOpen] = useState<boolean>(false);

  const toggleReviews = () => setOpen(!isOpen);

  return (
    <div className={classes.reviews}>
      <div className={classes.container}>
        <h5 className={classes.title}>
          Отзывы
          <span className={classes.amount}>{comments?.length}</span>
        </h5>
        <ButtonDropdown isOpen={isOpen} onClick={toggleReviews} isColor={false} />
      </div>
      {isOpen && (
        <div className={classes.reviewsWrapper}>
          {comments && comments.map((comment) => <Comment commentData={comment} key={comment.id} />)}
        </div>
      )}
      <Button text='Оценить книгу' className='btnRate'/>
    </div>
  );
};
