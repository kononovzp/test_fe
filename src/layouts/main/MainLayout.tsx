import { Grid, useTheme } from '@mui/material';

export interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout = (props: MainLayoutProps) => {
  const { children } = props;

  const { palette } = useTheme();

  return (
    <>
      <Grid
        container
        sx={{
          minHeight: '100vh',
          width: '100%',
          backgroundImage: `url('/assets/wave1.png'), url('/assets/wave2.png')`,
          backgroundSize: '100% 10%, 100% 10%',
          backgroundPosition: 'bottom, bottom',
          backgroundRepeat: 'no-repeat, no-repeat',
          bgcolor: palette.background.default,
        }}
        flexDirection="column"
      >
        <Grid container sx={{ flex: 1, position: 'relative', minHeight: '90vh' }}>
          {children}
        </Grid>
      </Grid>
    </>
  );
};
