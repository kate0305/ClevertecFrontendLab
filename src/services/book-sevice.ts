import { Cookies } from 'react-cookie';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { RootState } from '../store/store';
import { BookData, IResponse, ListOfBooks, LoginInfo, RecoveryInfo, User, UserResponse } from '../utils/types/book';
import { CategoriesList } from '../utils/types/navbar';
import { AuthFormValues, ForgotFormReq, ForgotFormValues, RecoveryFormValues, RegistrationFormValues } from '../utils/types/registration';

export const booksAPI = createApi({
  reducerPath: 'booksAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://strapi.cleverland.by',
    credentials: 'include',
    prepareHeaders: (headers, { getState }) => {
      const { isAuth, token } = (getState() as RootState).userReduser;
      console.log(token);
      if (isAuth) {
        headers.set('Authorization', `Bearer ${token}`);
      }

      return headers;
    },
  }),
  endpoints: (build) => ({
    getListBooks: build.query<ListOfBooks[], string>({
      query: () => '/api/books',
    }),
    getCategories: build.query<CategoriesList[], void>({
      query: () => '/api/categories',
    }),
    getBook: build.query<BookData, string>({
      query: (id) => `/api/books/${id}`,
    }),
    registrationUser: build.mutation<UserResponse, RegistrationFormValues>({
      query(data) {
        return {
          url: '/api/auth/local/register',
          method: 'POST',
          body: data,
          credentials: 'include',
        };
      },
    }),
    loginUser: build.mutation<LoginInfo, AuthFormValues>({
      query(data) {
        return {
          url: '/api/auth/local',
          method: 'POST',
          body: data,
          credentials: 'include',
        };
      },

      //   async onQueryStarted(args, { dispatch, queryFulfilled }) {
      //     try {
      //       await queryFulfilled;
      //       await dispatch(userApi.endpoints.getMe.initiate(null));
      //     } catch (error) {
      //       console.log(error);
      //     }
      //   },
    }),
    recoveryPassword: build.mutation<RecoveryInfo, RecoveryFormValues>({
      query(data) {
        return {
          url: '/api/auth/forgot-password',
          method: 'POST',
          body: data,
          credentials: 'include',
        };
      },
    }),
    setNewPassword: build.mutation<UserResponse, ForgotFormReq>({
      query(data) {
        return {
          url: '/api/auth/reset-password',
          method: 'POST',
          body: data,
          credentials: 'include',
        };
      },
    }),
  }),
});
