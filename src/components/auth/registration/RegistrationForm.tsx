import { useState } from 'react';
import { Box, Button, Divider, InputAdornment, Stack, Typography, useTheme } from '@mui/material';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { t } from 'i18next';

import { RegistrationFields } from '@/constants/index';
import { FormProvider, RHFOutlinedInput } from '@/components/common/hook-form';
import { SVGIcon } from '@/components/common/svg-icon';

import { RegistrationSchema } from './registrationSchema';
import Link from 'next/link';
import { PATH_AUTH } from '@/routes/paths';

export interface IRegistrationFormValues {
  [RegistrationFields.EMAIL]: string;
  [RegistrationFields.FIRST_NAME]: string;
  [RegistrationFields.LAST_NAME]: string;
  [RegistrationFields.PASSWORD]: string;
  [RegistrationFields.REPEAT_PASSWORD]: string;
  [RegistrationFields.REMEMBER]: boolean;
}

interface IRegistrationFormProps {
  isLoading: boolean;
  onSubmit: (data: IRegistrationFormValues) => void;
}

const defaultValues: IRegistrationFormValues = {
  [RegistrationFields.EMAIL]: '',
  [RegistrationFields.FIRST_NAME]: '',
  [RegistrationFields.LAST_NAME]: '',
  [RegistrationFields.PASSWORD]: '',
  [RegistrationFields.REPEAT_PASSWORD]: '',
  [RegistrationFields.REMEMBER]: false,
};

const RegistrationForm = ({ isLoading, onSubmit }: IRegistrationFormProps) => {
  const { palette, breakpoints } = useTheme();

  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showRepeatPassword, setShowRepeatPassword] = useState<boolean>(false);

  const methods = useForm<IRegistrationFormValues>({
    resolver: yupResolver(RegistrationSchema()),
    defaultValues,
    mode: 'onTouched',
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Stack>
        <Stack gap={1}>
          <RHFOutlinedInput
            name={RegistrationFields.EMAIL}
            type="email"
            placeholder={t('inputs.email')}
            label={`${t('inputs.email')} *`}
            fullWidth
            autoComplete="email"
          />
          <RHFOutlinedInput
            name={RegistrationFields.FIRST_NAME}
            type="text"
            placeholder={t('inputs.firstName')}
            fullWidth
            autoComplete="given-name"
          />
          <RHFOutlinedInput
            name={RegistrationFields.LAST_NAME}
            type="text"
            placeholder={t('inputs.lastName')}
            fullWidth
            autoComplete="family-name"
          />

          <RHFOutlinedInput
            name={RegistrationFields.PASSWORD}
            type={showPassword ? 'text' : 'password'}
            placeholder={t('inputs.password')}
            endAdornment={
              <InputAdornment position="end">
                <Button
                  variant="light"
                  sx={{ p: 0 }}
                  onClick={() => setShowPassword(!showPassword)}
                >
                  <SVGIcon
                    name={showPassword ? 'eyeClosed' : 'eye'}
                    width={24}
                    height={24}
                    color={palette.common.black}
                  />
                </Button>
              </InputAdornment>
            }
          />
          <RHFOutlinedInput
            name={RegistrationFields.REPEAT_PASSWORD}
            type={showRepeatPassword ? 'text' : 'password'}
            placeholder={t('inputs.confirmPassword')}
            endAdornment={
              <InputAdornment position="end">
                <Button
                  variant="light"
                  sx={{ p: 0 }}
                  onClick={() => setShowRepeatPassword(!showRepeatPassword)}
                >
                  <SVGIcon
                    name={showRepeatPassword ? 'eyeClosed' : 'eye'}
                    width={24}
                    height={24}
                    color={palette.common.black}
                  />
                </Button>
              </InputAdornment>
            }
          />
        </Stack>
        <Stack gap={2.5} mt={1.5}>
          <Divider />
          <Button fullWidth disabled={isSubmitting || isLoading} type="submit" variant="contained">
            {t('common.submit')}
          </Button>
        </Stack>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-start',
            mt: 2.5,
            [breakpoints.down('sm')]: {
              mt: 1.25,
            },
          }}
        >
          <Link href={PATH_AUTH.LOGIN} passHref>
            <Button
              sx={{
                alignSelf: 'flex-end',
              }}
              variant="link"
            >
              <Typography variant="linkButtonS" sx={{ textTransform: 'none' }}>
                {t('auth.noAccount')}
              </Typography>
            </Button>
          </Link>
        </Box>
      </Stack>
    </FormProvider>
  );
};

export default RegistrationForm;
