import { t } from 'i18next';
import { Box, Stack, Typography, useTheme } from '@mui/material';

import { useAppDispatch } from '@/store/hooks';
import { useLoginMutation } from '@/api/auth/authApi';
import { userApi } from '@/api/user/userApi';
import LoginForm, { ILoginFormValues } from '@/components/auth/login/LoginForm';
import { AuthGuard } from '@/auth';
import { PATH_MAIN } from '@/routes/paths';

export default function LoginPage() {
  const { breakpoints } = useTheme();

  const dispatch = useAppDispatch();

  const [login, { isLoading: loginLoading }] = useLoginMutation();

  const handleLogin = async ({ email, password, remember }: ILoginFormValues) => {
    dispatch(userApi.util.invalidateTags(['user']));

    await login({
      email: email.toLowerCase(),
      password,
      remember,
    }).unwrap();
  };

  return (
    <AuthGuard redirectUrlOnUnAuth={PATH_MAIN.MOVIES}>
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          pt: 6,
          [breakpoints.down('sm')]: {
            pt: '20px',
          },
        }}
      >
        <Box
          sx={{
            marginBottom: '40px',
          }}
        >
          <Typography variant="h2">{t('auth.login')}</Typography>
        </Box>
        <Stack
          gap={2.5}
          maxWidth={'440px'}
          width={'440px'}
          sx={{
            [breakpoints.down('sm')]: {
              maxWidth: '320px',
              width: '320px',
            },
          }}
        >
          <LoginForm isLoading={loginLoading} onSubmit={handleLogin} error={null} />
        </Stack>
      </Box>
    </AuthGuard>
  );
}
