/* eslint-disable jsx-a11y/anchor-has-content */
import { SocialLinkProps } from '../../utils/types/social-link';

import classes from './social-link.module.css';

export const SocialLink = (props: SocialLinkProps) => {
  const { img, link, title } = props;

  return (
    <li>
      <a
        className={classes.socialMediaItem}
        style={{ backgroundImage: `url(${img})` }}
        aria-label={title}
        href={link}
        target='_blank'
        rel='noopener noreferrer'
      />
    </li>
  );
};
