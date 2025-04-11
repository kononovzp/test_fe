import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API } from '../api.enum';
import { prepareHeaders } from '../utils/prepareHeaders';
import { SERVER_API } from '..';
import { IMovie } from '@/models/movies';

export interface CreateMovieRequest {
  title: string;
  publishYear: string;
}

export interface MovieResponse {
  id: string;
  title: string;
  publishYear: string;
  posterUrl: string;
}

export interface IGetMoviesRes {
  movies: IMovie[];
}

export const moviesApi = createApi({
  reducerPath: 'moviesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: SERVER_API,
    prepareHeaders,
  }),
  endpoints: (builder) => ({
    createMovie: builder.mutation<MovieResponse, FormData>({
      query(body) {
        return {
          url: API.MOVIES,
          method: 'POST',
          body,
        };
      },
    }),

    getMovies: builder.query<IGetMoviesRes, void>({
      query() {
        return {
          url: API.MOVIES,
          method: 'GET',
        };
      },
    }),
  }),
});

export const { useCreateMovieMutation, useGetMoviesQuery } = moviesApi;
