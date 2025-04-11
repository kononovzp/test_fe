import { Box } from '@mui/material';

import MovieList from '@/components/movies/MoviesList';
import MoviesEmpty from '@/components/movies/MoviesEmpty';
import { useGetMoviesQuery } from '@/api/movies/moviesApi';
import { useMemo } from 'react';
import { AuthGuard } from '@/auth';

export default function MoviesPage() {
  const { data, isSuccess } = useGetMoviesQuery();

  const movies = useMemo(() => data?.movies || [], [data]);

  return (
    <AuthGuard>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh',
          width: '100%',
          px: '120px',
        }}
      >
        {isSuccess && movies.length > 0 && <MovieList movies={movies} />}

        {(!isSuccess || !movies || !movies.length) && <MoviesEmpty />}
      </Box>
    </AuthGuard>
  );
}
