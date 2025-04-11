import { PATH_MAIN } from '@/routes/paths';
import { Box, Button, Typography, useMediaQuery, useTheme } from '@mui/material';
import { t } from 'i18next';
import { useRouter } from 'next/router';
import { useCallback } from 'react';

const MoviesEmpty = () => {
  const router = useRouter();
  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleClickAdd = useCallback(() => router.push(PATH_MAIN.MOVIES_NEW), [router]);

  return (
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
      <Typography
        variant={isMobile ? 'h3' : 'h2'}
        sx={{
          mb: 5,
        }}
      >
        {t('movies.empty')}
      </Typography>
      <Button variant="contained" onClick={handleClickAdd}>
        {t('movies.add')}
      </Button>
    </Box>
  );
};

export default MoviesEmpty;
