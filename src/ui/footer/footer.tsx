import { SocialLinkList } from '../social-link-list'

import classes from './footer.module.css';

export const Footer = () => (
  <div className={classes.wrapper}>
    <div className={classes.container}>
      <p className={classes.text}>© 2020-2023 Cleverland.</p>
      <p className={classes.text}>Все права защищены.</p>
    </div>
    <nav>
      <ul>
        <SocialLinkList />
      </ul>
    </nav>
  </div>
);
