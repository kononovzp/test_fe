import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { prepareHeaders } from '../utils/prepareHeaders';
import { API } from '../api.enum';
import { SERVER_API } from '..';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: SERVER_API,
    prepareHeaders,
  }),
  tagTypes: ['user'],
  endpoints: (builder) => ({
    getUserData: builder.query<{ email: string }, void>({
      query() {
        return {
          url: API.USER,
          method: 'GET',
        };
      },
      providesTags: ['user'],
    }),
  }),
});

export const { useGetUserDataQuery } = userApi;
