import { useCallback } from 'react';
import { Box, Stack, Typography, useTheme } from '@mui/material';
import { t } from 'i18next';

import { useRegisterMutation } from '@/api/auth/authApi';
import { RegistrationForm } from '@/components/auth/registration';
import { IRegistrationFormValues } from '@/components/auth/registration/RegistrationForm';
import { IRegistrationBody } from '@/models/auth';
import { AuthGuard } from '@/auth';
import { PATH_MAIN } from '@/routes/paths';

export default function RegisterPage() {
  const { breakpoints } = useTheme();
  const [register, { isLoading: registerLoading }] = useRegisterMutation();

  const handleSubmitRegistrationForm = useCallback(
    async (data: IRegistrationFormValues) => {
      const { email, firstName, lastName, password, remember } = data;

      const registrationPayload: IRegistrationBody = {
        email,
        firstName,
        lastName,
        password,
        remember,
      };

      await register(registrationPayload).unwrap();
    },
    [register]
  );

  return (
    <AuthGuard redirectUrlOnUnAuth={PATH_MAIN.MOVIES}>
      <Box
        sx={{
          padding: 5,
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Stack
          maxWidth={'440px'}
          width={'440px'}
          spacing={5}
          sx={{
            [breakpoints.down('sm')]: {
              width: '320px',
              maxWidth: '320px',
            },
          }}
        >
          <Typography variant="h1" textAlign={'center'}>
            {t('auth.register')}
          </Typography>
          <RegistrationForm isLoading={registerLoading} onSubmit={handleSubmitRegistrationForm} />
        </Stack>
      </Box>
    </AuthGuard>
  );
}
