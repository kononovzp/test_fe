import { Box, Grid } from '@mui/material';

import { IMovie } from '@/models/movies';
import MovieCard from './MovieCard';
import Header from '../header/Header';

interface IMovieListProps {
  movies: IMovie[];
}

const MovieList = ({ movies }: IMovieListProps) => {
  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ width: '100%', mb: '120px' }}>
        <Header />
      </Box>
      <Grid container spacing={3} sx={{ justifyContent: 'flex-start', width: '100%' }}>
        {movies.map((movie) => (
          <Grid key={movie.id} size={{ sm: 6, md: 4, lg: 3 }}>
            <MovieCard
              id={movie.id}
              title={movie.title}
              publishYear={movie.publishYear}
              photoUrl={movie.photoUrl}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default MovieList;
