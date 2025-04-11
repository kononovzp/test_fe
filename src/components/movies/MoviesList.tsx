import { Grid } from '@mui/material';

import { IMovie } from '@/models/movies';
import MovieCard from './MovieCard';
import Header from '../header/Header';

interface IMovieListProps {
  movies: IMovie[];
}

const MovieList = ({ movies }: IMovieListProps) => {
  return (
    <Grid container spacing={3} sx={{ justifyContent: 'center', width: '100%' }}>
      <Grid size={12}>
        <Header />
      </Grid>

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
  );
};

export default MovieList;
