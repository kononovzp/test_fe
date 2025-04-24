import { t } from 'i18next';
import * as Yup from 'yup';

import { AVATAR_SUPPORTED_FORMATS, EditMovieFields, MAX_AVATAR_SIZE } from '@/constants';

export const editMovieSchema = () =>
  Yup.object().shape({
    [EditMovieFields.PHOTO]: Yup.mixed<File>()
      .nullable()
      .test('fileSize', t('errors.fileSizeExceeds'), (value) => {
        return !value || (value && value.size <= MAX_AVATAR_SIZE);
      })
      .test('fileType', t('errors.invalidImageType'), (value) => {
        return !value || (value && AVATAR_SUPPORTED_FORMATS.includes(value.type));
      }),
    [EditMovieFields.TITLE]: Yup.string().required(t('errors.requiredField')),
    [EditMovieFields.PUBLISH_YEAR]: Yup.string()
      .matches(/^\d{4}$/, t('errors.invalidYear'))
      .required(t('errors.requiredField'))
      .test('validYear', t('errors.invalidYear'), (value) => {
        const year = parseInt(value ?? '0', 10);
        const currentYear = new Date().getFullYear();

        return year >= 1900 && year <= currentYear + 10;
      }),
  });
