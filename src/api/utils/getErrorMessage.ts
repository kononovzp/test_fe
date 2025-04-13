import { t } from 'i18next';
import { ApiError } from '@/api/types';
import { DEFAULT_ERROR_MESSAGE, errorMessages } from '@/constants';

export const getErrorMessage = (error: ApiError): string => {
  const errorData = error?.data || error;

  const errorKey = errorData?.error || DEFAULT_ERROR_MESSAGE;

  return t(errorMessages[errorKey] || 'errors.unknown');
};
