import { useCallback, useMemo, useState } from 'react';
import { Box, Pagination, useMediaQuery, useTheme } from '@mui/material';

import MovieList from '@/components/movies/MoviesList';
import MoviesEmpty from '@/components/movies/MoviesEmpty';
import { useGetMoviesQuery } from '@/api/movies/moviesApi';
import { AuthGuard } from '@/auth';
import { MOBILE_SCREEN } from '@/constants';
import { CircularLoader } from '@/components/common';
import { FIRST_PAGE, MOVIES_PAGE_SIZE } from '@/constants/movies';

export default function MoviesPage() {
  const isSmallScreen = useMediaQuery(MOBILE_SCREEN);
  const { breakpoints } = useTheme();

  const [currentPage, setCurrentPage] = useState<number>(FIRST_PAGE);

  const { data, isSuccess, isLoading } = useGetMoviesQuery({
    page: currentPage,
    take: MOVIES_PAGE_SIZE,
  });

  const movies = useMemo(() => data?.movies || [], [data]);
  const total = useMemo(() => data?.metadata.pagesAmount, [data?.metadata.pagesAmount]);

  const handlePaginationChange = useCallback((_event: React.ChangeEvent<unknown>, page: number) => {
    setCurrentPage(page);
  }, []);

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
        {isLoading && (
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
        )}
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

        {!isLoading && (!movies || !movies.length) && <MoviesEmpty />}
      </Box>
    </AuthGuard>
  );
}
