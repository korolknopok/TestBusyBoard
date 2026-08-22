import book from './book.svg';
import notification from './notification.svg';
import star from './star.svg';
import user from './user.svg';
import chevronDown from './chevron-down.svg';
import logo from './logo.png';

export const icons = {
  book,
  notification,
  star,
  user,
  chevronDown,
  logo,
};

export type IconName = keyof typeof icons;
