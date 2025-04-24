import { t } from 'i18next';
import * as Yup from 'yup';

import {
  RegistrationFields,
  EMAIL_REG_EXP,
  MAX_NAME_LENGTH,
  MIN_PASSWORD_LENGHT,
  PASSWORD_REG_EXP,
} from '@/constants/index';

export const RegistrationSchema = () =>
  Yup.object().shape({
    [RegistrationFields.EMAIL]: Yup.string()
      .required(t('errors.requiredEmail'))
      .matches(EMAIL_REG_EXP, t('errors.invalidEmail')),
    [RegistrationFields.FIRST_NAME]: Yup.string()
      .required(t('errors.requiredFirstName'))
      .max(MAX_NAME_LENGTH, t('errors.maxLengthChars', { value: MAX_NAME_LENGTH })),
    [RegistrationFields.LAST_NAME]: Yup.string()
      .required(t('errors.requiredLastName'))
      .max(MAX_NAME_LENGTH, t('errors.maxLengthChars', { value: MAX_NAME_LENGTH })),
    [RegistrationFields.PASSWORD]: Yup.string()
      .required(t('errors.requiredPass'))
      .min(MIN_PASSWORD_LENGHT, t('errors.minLengthPass', { value: MIN_PASSWORD_LENGHT }))
      .matches(PASSWORD_REG_EXP, t('errors.invalidPass')),
    [RegistrationFields.REPEAT_PASSWORD]: Yup.string()
      .required(t('errors.requiredPassRepeat'))
      .oneOf([Yup.ref(RegistrationFields.PASSWORD)], t('errors.passwordsDontMatch')),
    [RegistrationFields.REMEMBER]: Yup.boolean()
      .oneOf([true, false], t('errors.requiredField'))
      .default(false)
      .required(t('errors.requiredField')),
  });
