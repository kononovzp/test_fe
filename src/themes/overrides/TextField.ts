import { Theme } from '@mui/material/styles';

import { pxToRem } from '@/themes/typography';

export default function TextFieldStyles(theme: Theme) {
  return {
    MuiTextField: {
      defaultProps: {
        autoComplete: 'off',
      },
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-input': {
            fontWeight: 400,
            fontSize: pxToRem(14),
            lineHeight: '17.5px',
            '&::placeholder': {
              color: theme.palette.grey.A100,
              fontWeight: 400,
              fontSize: pxToRem(14),
              lineHeight: '17.5px',
            },
          },
          '& .MuiOutlinedInput-root': {
            padding: '0px 14px',
            height: '40px',
            borderRadius: 34,
          },
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: theme.palette.common.white,
            '&:hover': {
              borderColor: theme.palette.primary.light,
            },
            '&.Mui-focused': {
              borderColor: theme.palette.primary.main,
            },
          },
          '&.Mui-error': {
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: theme.palette.error.main,
            },
          },
        },
      },
    },
  };
}
