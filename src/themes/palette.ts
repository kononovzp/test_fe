import { createTheme } from '@mui/material/styles';

import { ThemeMode } from '@/models/mui/config';

export const COLORS = {
  primary: '#2BD17E',
  primaryDarker: '#22A868',
  primaryLighter: '#2BD17ECC',
  error: '#EB5757',
  background: '#093545',
  input: '#224957',
  card: '#092C39',
  white: '#FFFFFF',
  black: '#000000',
};

const Palette = (mode: ThemeMode) => {
  const isLight = mode === 'light';

  return createTheme({
    palette: {
      mode: isLight ? 'light' : 'dark',
      primary: {
        main: COLORS.primary,
        contrastText: COLORS.white,
        lighter: COLORS.primaryLighter,
        darker: COLORS.primaryDarker,
      },
      error: {
        main: COLORS.error,
      },
      background: {
        default: isLight ? COLORS.white : COLORS.background,
        paper: isLight ? COLORS.white : COLORS.card,
      },
      text: {
        primary: isLight ? COLORS.black : COLORS.white,
        secondary: isLight ? COLORS.primary : COLORS.white,
      },
      common: {
        black: COLORS.black,
        white: COLORS.white,
      },
    },
  });
};

export default Palette;
