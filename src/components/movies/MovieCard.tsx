import { useCallback } from 'react';
import { Box, Button, Typography, useTheme } from '@mui/material';
import { useRouter } from 'next/router';

import { PATH_MAIN } from '@/routes/paths';
import { SVGIcon } from '../common';

interface IMovieCardProps {
  id: string;
  title: string;
  publishYear: string;
  photoUrl: string;
}

const MovieCard = ({ id, title, publishYear, photoUrl }: IMovieCardProps) => {
  const { palette, breakpoints } = useTheme();
  const router = useRouter();

  const handleClickEdit = useCallback(
    (id: string) => {
      router.push(`${PATH_MAIN.MOVIES}${id}`);
    },
    [router]
  );

  return (
    <Box
      key={id}
      sx={{
        boxShadow: 3,
        height: '100%',
        maxHeight: '504px',
        maxWidth: '400px',
        borderRadius: '12px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: palette.background.paper,
        overflow: 'hidden',
        [breakpoints.down('sm')]: {
          height: '334px',
          maxWidth: '180px',
        },
      }}
    >
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <Box
          sx={{
            width: '100%',
            height: '400px',
            [breakpoints.down('sm')]: {
              height: '246px',
            },
          }}
        >
          <img
            src={photoUrl}
            alt={title}
            style={{ width: '100%', height: '100%', maxWidth: '100%', maxHeight: '100%' }}
          />
        </Box>
        <Box
          sx={{
            position: 'relative',
            backgroundColor: palette.background.paper,
            color: palette.common.white,
            padding: 1.5,
          }}
        >
          <Typography variant="h6">{title}</Typography>
          <Typography variant="body2">{publishYear}</Typography>
          <Box sx={{ position: 'absolute', top: 8, right: 8 }}>
            <Button
              variant="outlined"
              sx={{ p: 0, minWidth: 0 }}
              onClick={() => handleClickEdit(id)}
            >
              <SVGIcon name={'edit'} width={24} height={24} color={palette.common.white} />
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default MovieCard;
