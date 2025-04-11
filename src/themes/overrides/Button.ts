import { Theme } from '@mui/material/styles';

import { pxToRem } from '@/themes/typography';

export default function Button(theme: Theme) {
  return {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: '16px 28px',
          fontSize: pxToRem(16),
          fontWeight: 700,
          lineHeight: pxToRem(24),
          border: '2px solid transparent',
          transition: 'all 0.3s ease-in-out',
          '&:focus': {
            outline: 'none !important',
          },
          '.MuiTouchRipple-child': {
            backgroundColor: theme.palette.primary[400],
          },
          '&.no-text-transform': {
            textTransform: 'none',
          },
          '&.custom-small-button-1': {
            padding: `${pxToRem(2)} ${pxToRem(12)}`,
          },
          '&.go-back-button': {
            color: theme.palette.primary[900],
            '&:hover': {
              background: theme.palette.primary[100],
            },
          },
          '&.secondary': {
            padding: '4px 16px',
            backgroundColor: theme.palette.primary[50],
            color: theme.palette.primary[900],
            '&:hover': {
              backgroundColor: theme.palette.primary[100],
              color: theme.palette.primary[950],
            },
          },
          '&.secondary-dark': {
            padding: '4px 8px',
            backgroundColor: theme.palette.primary[900],
            color: theme.palette.primary[50],
            '&:hover': {
              backgroundColor: theme.palette.primary[950],
              color: theme.palette.primary[50],
            },
            '& .MuiLoadingButton-loadingIndicator': {
              color: theme.palette.primary[50],
            },
          },
          '&.delete': {
            backgroundColor: theme.palette.error.main,
            color: theme.palette.common.white,
            boxShadow: theme.customShadows.box2,
            '&:hover': {
              backgroundColor: theme.palette.error.dark,
            },
            '&.Mui-disabled': {
              backgroundColor: theme.palette.grey[400],
              color: theme.palette.grey[50],
              boxShadow: 'none',
            },
          },
          '&.warning': {
            backgroundColor: theme.palette.warning.main,
            color: theme.palette.common.white,
            boxShadow: theme.customShadows.box2,
            '&:hover': {
              backgroundColor: theme.palette.warning.dark,
            },
            '&.Mui-disabled': {
              backgroundColor: theme.palette.grey[400],
              color: theme.palette.grey[50],
              boxShadow: 'none',
            },
          },
        },

        contained: {
          backgroundColor: theme.palette.primary.main,
          color: theme.palette.common.white,
          '&:hover': {
            backgroundColor: theme.palette.primary.darker,
            color: theme.palette.common.white,
            borderColor: theme.palette.primary.darker,
            border: 'none',
          },
          '&.Mui-disabled': {
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.text.primary,
          },
        },
        outlined: {
          color: theme.palette.common.white,
          '&:hover': {
            backgroundColor: theme.palette.primary.lighter,
            color: theme.palette.common.white,
            borderColor: theme.palette.primary.lighter,
            border: 'none',
          },
          '&.Mui-disabled': {
            borderColor: theme.palette.primary.lighter,
            color: theme.palette.text.disabled,
            border: 'none',
          },
        },
        text: {
          outline: 'none',
          color: theme.palette.primary.contrastText,
          '&:hover': {
            backgroundColor: 'transparent',
            textDecoration: 'underline',
          },
        },
        light: {
          backgroundColor: theme.palette.common.white,
          color: theme.palette.primary.main,
          '&:hover': {
            backgroundColor: theme.palette.primary.A300,
          },
          '&:active': {
            backgroundColor: theme.palette.primary.A300,
          },
        },
        link: {
          padding: '2px 4px',
          outline: 'none',
          width: 'fit-content',
          color: theme.palette.primary.contrastText,
          '&:hover': {
            backgroundColor: 'transparent',
            textDecoration: 'underline',
            color: theme.palette.primary.contrastText,
          },
          '& svg': {
            color: theme.palette.primary.contrastText,
          },
        },
        header: {
          outline: 'none',
          minWidth: 0,
          color: theme.palette.primary.main,
          fontWeight: 600,
          fontSize: pxToRem(14),
          lineHeight: '24px',
          backgroundColor: 'transparent',
          '&:hover': {
            backgroundColor: theme.palette.primary[500],
            color: theme.palette.primary.main,
          },
          '&.active-header-item': {
            backgroundColor: `${theme.palette.primary[500]} !important`,
            color: theme.palette.primary.main,
          },
        },
      },
    },
    MuiButtonBase: {
      styleOverrides: {
        root: {
          '& .MuiTouchRipple-root .MuiTouchRipple-child': {
            backgroundColor: theme.palette.primary[400],
          },
        },
      },
    },
  };
}
