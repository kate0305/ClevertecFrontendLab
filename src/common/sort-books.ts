import { ListOfBooks } from '../utils/types/book';

export const sortBooks = (arr: ListOfBooks[], asc: boolean) => {
  const sorter = (a: ListOfBooks, b: ListOfBooks) => {
    if (asc) {
      if (a.rating === b.rating) {
        return 0;
      }

      if (a.rating == null) {
        return 1;
      }

      if (b.rating == null) {
        return -1;
      }

      return a.rating < b.rating ? 1 : -1;
    }
      if (a.rating === b.rating) {
        return 0;
      }

      if (a.rating == null) {
        return -1;
      }

      if (b.rating == null) {
        return 1;
      }

      return a.rating < b.rating ? -1 : 1;

  };

  return [...arr].sort(sorter);
};
