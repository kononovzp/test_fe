import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';

import '@/styles/globals.css';
import ThemeCustomization from '@/themes';
import '@/locales';
import { store } from '@/store';
import { MainLayout } from '@/layouts/main/MainLayout';
import { SnackbarProvider } from 'notistack';
import { AuthProvider } from '@/auth';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ThemeCustomization>
        <SnackbarProvider
          maxSnack={3}
          autoHideDuration={4000}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        >
          <AuthProvider>
            <MainLayout>
              <Component {...pageProps} />
            </MainLayout>
          </AuthProvider>
        </SnackbarProvider>
      </ThemeCustomization>
    </Provider>
  );
}
