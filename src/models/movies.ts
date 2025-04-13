export interface IMovie {
  id: string;
  title: string;
  publishYear: string;
  photoUrl: string;
}

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

export interface IMetadata {
  pagesAmount: number;
  hasPrev: boolean;
  hasNext: boolean;
  page: number;
  take: number;
  itemsAmount: number;
}

export interface IGetMoviesRes {
  movies: IMovie[];
  metadata: IMetadata;
}
