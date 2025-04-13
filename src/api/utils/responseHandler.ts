import { fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { enqueueSnackbar } from 'notistack';

import { ErrorMessages } from '@/constants';
import { logout } from '@/store/slices/auth';
import { getErrorMessage } from './getErrorMessage';
import { SERVER_API } from '..';
import { ApiError, ErrorType } from '../types';
import { prepareHeaders } from './prepareHeaders';

export const baseQueryWithReauth = async (args: any, api: any, extraOptions: any) => {
  const baseQuery = fetchBaseQuery({
    baseUrl: SERVER_API,
    prepareHeaders,
  });

  const result = await baseQuery(args, api, extraOptions);

  // If the response has a 401 status code, trigger logout
  if (
    result.error &&
    result.error.status === 401 &&
    (result.error.data as ErrorType)?.error !== ErrorMessages.EmailOrPasswordInvalid
  ) {
    api.dispatch(logout());
  }

  if (
    result.error &&
    (result.error.data as ErrorType)?.error !== ErrorMessages.UnauthorizedException
  ) {
    const errorMessage = getErrorMessage(result.error as ApiError);

    enqueueSnackbar(errorMessage, {
      variant: 'error',
    });
  }

  return result;
};
