import { Theme } from '@mui/material/styles';

import { pxToRem } from '../typography';

export default function Pagination(theme: Theme) {
  return {
    MuiPagination: {
      styleOverrides: {
        root: {
          '& .MuiPagination-ul': {
            justifyContent: 'center',
          },
        },
      },
    },
    MuiPaginationItem: {
      styleOverrides: {
        root: {
          height: '32px',
          minWidth: '32px',
          borderRadius: '8px',
          transition: 'all 0.3s ease-in-out',
          backgroundColor: theme.palette.background.paper,
          '&:hover': {
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.common.white,
          },
          '&:active': {
            border: `1px solid ${theme.palette.primary.main}`,
          },
        },
        page: {
          fontSize: pxToRem(14),
          lineHeight: pxToRem(24),
          color: theme.palette.common.white,
          backgroundColor: theme.palette.background.paper,
          transition: 'all 0.3s ease-in-out',
          '&:hover': {
            color: theme.palette.common.white,
            backgroundColor: theme.palette.background.paper,
          },
          '&.Mui-selected': {
            color: theme.palette.common.white,
            backgroundColor: theme.palette.primary.main,
            fontWeight: '700',
            '&:hover': {
              backgroundColor: theme.palette.primary.darker,
            },
          },
        },
      },
    },
  };
}
