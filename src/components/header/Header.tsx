import { Box, Button, Typography, useTheme } from '@mui/material';
import { t } from 'i18next';
import { useRouter } from 'next/router';

import { SVGIcon } from '@/components/common/svg-icon';
import { useAppDispatch } from '@/store/hooks';
import { logout } from '@/store/slices/auth';
import { PATH_AUTH, PATH_MAIN } from '@/routes/paths';
import { persistedStore } from '@/store';

const Header = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const theme = useTheme();

  const handleLogout = () => {
    dispatch(logout());
    persistedStore.purge();

    router.push(PATH_AUTH.LOGIN);
  };

  const handleAdd = () => {
    router.push(PATH_MAIN.MOVIES_NEW);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '20px',
        }}
      >
        <Typography
          variant="h2"
          sx={{
            color: theme.palette.common.white,
            [theme.breakpoints.down('sm')]: {
              ...theme.typography.h3,
            },
          }}
        >
          {t('movies.myMovies')}
        </Typography>
        <Button
          onClick={handleAdd}
          variant="outlined"
          type="button"
          sx={{ border: 'none', p: 1.5, minWidth: 0 }}
        >
          <SVGIcon name="add" height={24} width={24} />
        </Button>
      </Box>

      <Button
        variant="outlined"
        onClick={handleLogout}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '20px',
          color: theme.palette.common.white,
          border: 'none',
          p: 1.5,
          minWidth: 0,
        }}
        type="button"
      >
        <SVGIcon name="logout" height={24} width={24} />
      </Button>
    </Box>
  );
};

export default Header;
