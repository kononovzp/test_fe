import { Theme } from '@mui/material/styles';

import { pxToRem } from '@/themes/typography';

export default function FormControlLabel(theme: Theme) {
  return {
    MuiFormControlLabel: {
      styleOverrides: {
        label: {
          color: theme.palette.primary.main,
          fontSize: pxToRem(16),
        },
        root: {
          '&.custom-form-control-label-0': {
            marginLeft: 0,
            '& .MuiFormControlLabel-label': {
              fontSize: pxToRem(16),
              opacity: 1,
              color: theme.palette.primary.main,
            },
          },
          '&.custom-form-control-label-1': {
            marginLeft: 0,
            '& .MuiFormControlLabel-label': {
              fontSize: pxToRem(14),
              opacity: 1,
              color: theme.palette.common.white,
            },
          },
          '&.custom-form-control-label-2': {
            marginLeft: 0,
            '& .MuiFormControlLabel-label': {
              fontSize: pxToRem(20),
              opacity: 1,
              color: theme.palette.grey[800],
              width: pxToRem(120),
            },
          },
          '&.custom-form-control-label-3': {
            marginLeft: 0,
            gap: '4px',
            '& .MuiFormControlLabel-label': {
              fontSize: pxToRem(10),
              opacity: 1,
              color: theme.palette.primary[900],
            },
          },
          '&.custom-form-control-label-4': {
            marginLeft: -6,
            gap: pxToRem(4),
          },
          '&.form-control-label-font-weight-600': {
            '& .MuiFormControlLabel-label': {
              fontWeight: 600,
            },
          },
          '&.form-control-label-grey-950': {
            '& .MuiFormControlLabel-label': {
              color: theme.palette.primary.main,
            },
          },
          '&.radio-form-label': {
            '.MuiFormControlLabel-label': {
              color: theme.palette.primary[900],
              fontSize: pxToRem(12),
              lineHeight: pxToRem(15),
              fontWeight: 400,
              opacity: 1,
            },
          },
          '&.form-control-label-gap-8': {
            gap: pxToRem(8),
          },
          '&.form-control-label-mr-0': {
            marginRight: 0,
          },
          '&.form-control-label-ml-0': {
            marginLeft: 0,
          },
          '&.form-control-label-width-auto': {
            '& .MuiFormControlLabel-label': {
              width: 'auto',
            },
          },
        },
      },
    },
  };
}
