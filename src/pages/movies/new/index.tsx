import { AuthGuard } from '@/auth';
import EditMovieForm from '@/components/movies/editMovieForm/EditMovieForm';

export default function MoviesPage() {
  return (
    <AuthGuard>
      <EditMovieForm />
    </AuthGuard>
  );
}
