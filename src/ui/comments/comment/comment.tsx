import userFoto from '../../../assets/images/jpeg/user-review.jpg';
import { CommentData } from '../../../utils/types/book';

import classes from './comment.module.css';

type CommentProps = {
  commentData: CommentData;
};

export const Comment = ({ commentData }: CommentProps) => {
  const date = new Date(commentData.createdAt)
    .toLocaleDateString('ru', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
    .slice(0, -3);

  return (
    <div className={classes.wrapper}>
      <div className={classes.user}>
        <img src={commentData.user.avatarUrl ? commentData.user.avatarUrl : userFoto} alt='user foto' />
        <div className={classes.userDescription}>
          <p className={classes.name}>{commentData.user.firstName}</p>
          <p className={classes.date}>{date}</p>
        </div>
      </div>
      <div className={classes.rating} />
      <p className={classes.commentText}>{commentData.text}</p>
    </div>
  );
};
