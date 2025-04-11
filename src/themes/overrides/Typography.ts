import { COLORS } from '../palette';

export default function Typography() {
  return {
    MuiTypography: {
      styleOverrides: {
        root: {
          color: COLORS.white,
        },
        gutterBottom: {
          marginBottom: 12,
        },
      },
    },
  };
}
