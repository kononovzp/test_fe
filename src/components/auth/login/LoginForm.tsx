import { useState } from 'react';
import { Box, Button, Divider, InputAdornment, Stack, Typography, useTheme } from '@mui/material';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { t } from 'i18next';
import Link from 'next/link';

import { LoginFields } from '@/constants/index';
import { FormProvider, RHFOutlinedInput } from '@/components/common/hook-form';
import { SVGIcon } from '@/components/common/svg-icon';
import RHFCheckBox from '@/components/common/hook-form/RHFCheckBox';
import { PATH_AUTH } from '@/routes/paths';

import { LoginSchema } from './loginSchema';

export interface ILoginFormValues {
  [LoginFields.EMAIL]: string;
  [LoginFields.PASSWORD]: string;
  [LoginFields.REMEMBER]: boolean;
}

interface ILoginFormProps {
  onSubmit: (data: ILoginFormValues) => void;
  isLoading: boolean;
  error: string | null;
}

const defaultValues: ILoginFormValues = {
  [LoginFields.EMAIL]: '',
  [LoginFields.PASSWORD]: '',
  [LoginFields.REMEMBER]: false,
};

const LoginForm = ({ isLoading, onSubmit }: ILoginFormProps) => {
  const { palette, breakpoints } = useTheme();

  const [showPassword, setShowPassword] = useState<boolean>(false);

  const methods = useForm<ILoginFormValues>({
    resolver: yupResolver(LoginSchema()),
    defaultValues,
    mode: 'onTouched',
  });

  const {
    handleSubmit,
    formState: { isSubmitting, isValid },
  } = methods;

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Stack>
        <Stack gap={1}>
          <RHFOutlinedInput
            name={LoginFields.EMAIL}
            type="email"
            placeholder={t('inputs.email')}
            fullWidth
          />
          <RHFOutlinedInput
            name={LoginFields.PASSWORD}
            type={showPassword ? 'text' : 'password'}
            placeholder={t('inputs.password')}
            endAdornment={
              <InputAdornment position="end">
                <Button
                  variant="outlined"
                  sx={{ p: 0.5, minWidth: 0 }}
                  onClick={() => setShowPassword(!showPassword)}
                >
                  <SVGIcon
                    name={showPassword ? 'eyeClosed' : 'eye'}
                    width={24}
                    height={24}
                    color={palette.common.white}
                  />
                </Button>
              </InputAdornment>
            }
          />
        </Stack>
        <Stack direction={'row'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
          <RHFCheckBox
            name={LoginFields.REMEMBER}
            label={t('inputs.remember')}
            className="custom-form-control-label-1"
            checkboxClassName="custom-checkbox-1"
          />
        </Stack>
        <Stack gap={2.5} mt={1.5}>
          <Divider />
          <Button
            fullWidth
            disabled={isSubmitting || !isValid || isLoading}
            type="submit"
            variant="contained"
            className="no-text-transform"
          >
            {t('auth.login')}
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
          <Link href={PATH_AUTH.REGISTER} passHref>
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

export default LoginForm;
