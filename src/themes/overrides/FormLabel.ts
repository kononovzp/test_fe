import { pxToRem } from '@/themes/typography';

export default function FormLabel() {
  return {
    MuiFormLabel: {
      styleOverrides: {
        root: {
          '&.MuiFormLabel-root': {
            fontSize: pxToRem(12),
            lineHeight: pxToRem(14),
          },
        },
      },
    },
  };
}
