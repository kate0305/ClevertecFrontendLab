import { socialLinks } from '../../data/social-link'
import { SocialLink } from '../social-link'

import classes from './social-link-list.module.css';

export const SocialLinkList = () => (
  <div className={classes.list}>
    {socialLinks.map((socialLink) => (
      <SocialLink
        id={socialLink.id}
        key={socialLink.id}
        img={socialLink.img}
        link={socialLink.link}
        title={socialLink.title}
      />
    ))}
  </div>
);
