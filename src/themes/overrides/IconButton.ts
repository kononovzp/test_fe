import { Theme } from '@mui/material/styles';

export default function IconButton(theme: Theme) {
  return {
    MuiIconButton: {
      styleOverrides: {
        root: {
          borderRadius: '6px',
          backgroundColor: theme.palette.common.white,
          border: `2px solid ${theme.palette.primary[100]}`,
          color: theme.palette.primary.main,
          transition: 'all 0.3s ease-in-out',
          '.MuiTouchRipple-child': {
            backgroundColor: theme.palette.primary[400],
          },
          '&:hover': {
            borderColor: theme.palette.primary[100],
            backgroundColor: theme.palette.primary.A100,
          },
          '&:focus': {
            borderColor: theme.palette.primary[100],
            outline: 'none !important',
          },
          '&:active': {
            outline: 'none',
            borderColor: theme.palette.primary[100],
            backgroundColor: theme.palette.primary.A200,
          },
          '&.Mui-disabled': {
            borderColor: theme.palette.grey[300],
            borderWidth: '2px',
            color: theme.palette.primary.main,
            backgroundColor: theme.palette.common.white,
          },
        },
      },
    },
  };
}
