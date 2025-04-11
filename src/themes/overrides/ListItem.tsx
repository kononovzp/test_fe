import { Theme } from '@mui/material/styles';

export default function ListItem(theme: Theme) {
  return {
    MuiListItem: {
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
