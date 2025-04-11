import { pxToRem } from '@/themes/typography';

export default function FormHelperText() {
  return {
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          fontSize: pxToRem(12),
          marginLeft: 0,
        },
      },
    },
  };
}
