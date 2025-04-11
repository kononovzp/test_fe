import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { loginSuccess, logout } from '@/store/slices/auth';
import { IRegistrationBody } from '@/models/auth';

import { API } from '../api.enum';
import { prepareHeaders } from '../utils/prepareHeaders';
import { SERVER_API } from '..';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: SERVER_API,
    prepareHeaders,
  }),
  endpoints: (builder) => ({
    login: builder.mutation<
      { accessToken: string },
      { email: string; password: string; remember: boolean }
    >({
      query({ email, password, remember }) {
        return {
          url: API.AUTH,
          method: 'POST',
          body: { email, password, remember },
        };
      },
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          const token = data?.accessToken;
          if (token) {
            dispatch(loginSuccess(token));
          }
        } catch {
          dispatch(logout());
        }
      },
    }),
    register: builder.mutation<{ accessToken: string }, IRegistrationBody>({
      query(body) {
        return {
          url: API.REGISTER,
          method: 'POST',
          body,
        };
      },
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          const token = data?.accessToken;
          if (token) {
            dispatch(loginSuccess(token));
          }
        } catch {
          dispatch(logout());
        }
      },
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation } = authApi;
