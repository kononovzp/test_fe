export type ResponseType = {
  status: number;
};

export interface ErrorType {
  message: string;
  error: string;
  statusCode: number;
}

export interface ApiError {
  data?: ErrorType;
  error?: string;
  status?: number;
}
