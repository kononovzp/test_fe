import { createApi } from '@reduxjs/toolkit/query/react';

import { IGetMoviesRes, MovieResponse } from '@/models/movies';
import { IPageParams } from '@/models';
import { API } from '../api.enum';
import { baseQueryWithReauth } from '../utils/responseHandler';

export const moviesApi = createApi({
  reducerPath: 'moviesApi',
  baseQuery: baseQueryWithReauth,
  tagTypes: ['movies'],
  endpoints: (builder) => ({
    createMovie: builder.mutation<MovieResponse, FormData>({
      query(body) {
        return {
          url: API.MOVIES,
          method: 'POST',
          body,
        };
      },
      invalidatesTags: ['movies'],
    }),

    getMovies: builder.query<IGetMoviesRes, IPageParams>({
      query({ page = 1, take = 12 }) {
        const params = new URLSearchParams({
          page: page.toString(),
          take: take.toString(),
        });

        return {
          url: `${API.MOVIES}?${params.toString()}`,
          method: 'GET',
        };
      },
      providesTags: ['movies'],
    }),

    updateMovie: builder.mutation<MovieResponse, { movieId: string; body: FormData }>({
      query({ movieId, body }) {
        return {
          url: `${API.MOVIES}/${movieId}`,
          method: 'PATCH',
          body,
        };
      },
      invalidatesTags: ['movies'],
    }),
  }),
});

export const { useCreateMovieMutation, useGetMoviesQuery, useUpdateMovieMutation } = moviesApi;
