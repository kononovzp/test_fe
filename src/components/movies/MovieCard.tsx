import { Box, Card, CardContent, Typography, useTheme } from '@mui/material';
import Image from 'next/image';

interface IMovieCardProps {
  id: string;
  title: string;
  publishYear: string;
  photoUrl: string;
}

const MovieCard = ({ id, title, publishYear, photoUrl }: IMovieCardProps) => {
  const { palette } = useTheme();

  return (
    <Card key={id} sx={{ maxWidth: 345, marginBottom: 3, borderRadius: 2, boxShadow: 3 }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <Image
          src={photoUrl}
          alt={title}
          width={345}
          height={200}
          objectFit="cover"
          layout="responsive"
        />
        <CardContent
          sx={{
            backgroundColor: palette.background.paper,
            color: palette.common.white,
            padding: 1.5,
          }}
        >
          <Typography variant="h6">{title}</Typography>
          <Typography variant="body2">{publishYear}</Typography>
        </CardContent>
      </Box>
    </Card>
  );
};

export default MovieCard;
