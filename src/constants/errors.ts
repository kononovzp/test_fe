import { TxKeyPath } from '@/models';

export enum ErrorMessages {
  SomethingWentWrong = 'SomethingWentWrong',
  UnauthorizedException = 'UnauthorizedException',
  EmailOrPasswordInvalid = 'EmailOrPasswordIsNotValidException',
  PasswordInvalid = 'PasswordIsNotValidException',
}

export const DEFAULT_ERROR_MESSAGE = ErrorMessages.SomethingWentWrong;

export const errorMessages: Record<string, TxKeyPath> = {
  [ErrorMessages.SomethingWentWrong]: 'errors.unknown',
  [ErrorMessages.UnauthorizedException]: 'errors.unauthorized',
};
