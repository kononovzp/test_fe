import { useCallback, useMemo, useState } from 'react';
import { Box, Pagination, useMediaQuery, useTheme } from '@mui/material';

import MovieList from '@/components/movies/MoviesList';
import MoviesEmpty from '@/components/movies/MoviesEmpty';
import { useGetMoviesQuery } from '@/api/movies/moviesApi';
import { AuthGuard } from '@/auth';
import { MOBILE_SCREEN } from '@/constants';
import { CircularLoader } from '@/components/common';

export default function MoviesPage() {
  const isSmallScreen = useMediaQuery(MOBILE_SCREEN);
  const { breakpoints } = useTheme();

  const [currentPage, setCurrentPage] = useState<number>(1);

  const { data, isSuccess, isLoading } = useGetMoviesQuery({
    page: currentPage,
    take: 12,
  });

  const movies = useMemo(() => data?.movies || [], [data]);
  const total = useMemo(() => data?.metadata.pagesAmount, [data?.metadata.pagesAmount]);

  const handlePaginationChange = useCallback((_event: React.ChangeEvent<unknown>, page: number) => {
    setCurrentPage(page);
  }, []);

  if (isLoading) {
    return (
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          minHeight: '60vh',
        }}
      >
        <CircularLoader />
      </Box>
    );
  }

  return (
    <AuthGuard>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          p: '120px',
        }}
      >
        {isSuccess && movies.length > 0 && (
          <Box
            sx={{
              width: '100%',
              justifyContent: 'center',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <MovieList movies={movies} />
            <Pagination
              count={total}
              page={currentPage}
              onChange={handlePaginationChange}
              siblingCount={1}
              boundaryCount={1}
              showFirstButton={!isSmallScreen}
              showLastButton={!isSmallScreen}
              sx={{
                mt: '120px',
                [breakpoints.down('sm')]: {
                  mt: 5,
                },
              }}
            />
          </Box>
        )}

        {(!isSuccess || !movies || !movies.length) && <MoviesEmpty />}
      </Box>
    </AuthGuard>
  );
}
