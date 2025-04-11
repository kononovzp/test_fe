import { Theme } from '@mui/material/styles';

export default function MenuItem(theme: Theme) {
  return {
    MuiMenuItem: {
      styleOverrides: {
        root: {
          transition: 'all 0.3s ease-in-out',
          '&:hover': {
            backgroundColor: theme.palette.primary[500],
          },
          '&:focus': {
            backgroundColor: theme.palette.primary.A400,
          },
          '&:active': {
            backgroundColor: theme.palette.primary.A400,
          },
        },
      },
    },
  };
}
