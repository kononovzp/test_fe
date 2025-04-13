import { createApi } from '@reduxjs/toolkit/query/react';

import { loginSuccess, logout } from '@/store/slices/auth';
import { IRegistrationBody } from '@/models/auth';

import { API } from '../api.enum';
import { baseQueryWithReauth } from '../utils/responseHandler';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: baseQueryWithReauth,
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
