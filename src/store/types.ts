import { HttpStatus } from './httpStatus';

export interface LoginRequest {
  email: string;
}

export interface IServerResponse<T = object> {
  statusCode: HttpStatus;
  message?: string | string[];
  data?: T;
}

export interface IServerError {
  status: HttpStatus;
  data: IServerResponse;
}
