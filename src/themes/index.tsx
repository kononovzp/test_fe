import { ReactNode, useMemo } from 'react';
import { CssBaseline, StyledEngineProvider } from '@mui/material';
import {
  createTheme,
  ThemeOptions,
  ThemeProvider,
  Theme,
  TypographyVariantsOptions,
} from '@mui/material/styles';
import { useSelector } from 'react-redux';

import { CustomShadowProps } from '@/models/mui/theme';
import { settings } from '@/store/selectors';

import Palette from './palette';
import Typography from './typography';
import componentsOverride from './overrides';
import CustomShadows from './shadows';

type ThemeCustomizationProps = {
  children: ReactNode;
};

export default function ThemeCustomization({ children }: ThemeCustomizationProps) {
  const { themeMode } = useSelector(settings);

  const theme: Theme = useMemo<Theme>(() => Palette(themeMode), [themeMode]);

  const themeTypography: TypographyVariantsOptions = useMemo<TypographyVariantsOptions>(
    () => Typography(),
    []
  );

  const themeCustomShadows: CustomShadowProps = useMemo<CustomShadowProps>(
    () => CustomShadows(),
    []
  );

  const themeOptions: ThemeOptions = useMemo(
    () => ({
      breakpoints: {
        values: {
          xs: 0,
          sm: 768,
          md: 964,
          lg: 1200,
          xl: 1420,
          xxl: 1980,
        },
      },
      mixins: {
        toolbar: {
          minHeight: 80,
          paddingTop: 8,
          paddingBottom: 8,
        },
      },
      palette: theme.palette,
      typography: themeTypography,

      customShadows: themeCustomShadows,
    }),
    [theme, themeTypography, themeCustomShadows]
  );

  const themes: Theme = createTheme(themeOptions);

  themes.components = componentsOverride(themes);

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={themes}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  );
}
