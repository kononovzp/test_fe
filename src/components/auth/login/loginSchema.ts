import { t } from 'i18next';
import * as Yup from 'yup';

import { LoginFields, EMAIL_REG_EXP } from '@/constants/index';

export const LoginSchema = () =>
  Yup.object().shape({
    [LoginFields.EMAIL]: Yup.string()
      .required(t('errors.requiredField'))
      .matches(EMAIL_REG_EXP, t('errors.invalidEmail')),
    [LoginFields.PASSWORD]: Yup.string().required(t('errors.requiredField')),
    [LoginFields.REMEMBER]: Yup.boolean().required(t('errors.requiredField')),
  });
