import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { BookData, ListOfBooks } from '../utils/types/book';
import { CategoriesList } from '../utils/types/navbar';

export const booksAPI = createApi({
  reducerPath: 'booksAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://strapi.cleverland.by' }),
  endpoints: (build) => ({
    getListBooks: build.query<ListOfBooks[], string>({
      query: () => '/api/books'
    }),
    getCategories: build.query<CategoriesList[], void>({
      query: () => '/api/categories',
    }),
    getBook: build.query<BookData, string>({
      query: (id) => `/api/books/${id}`,
    }),
  }),
});
