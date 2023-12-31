export type ServiceMessage = { message: string };

type ServiceResponseErrorType = 'INVALID_DATA' | 'NOT_FOUND';

export type ServiceResponseError = {
  status: ServiceResponseErrorType,
  data: ServiceMessage
};

export type ServiceResponseSuccess<T> = {
  status: 'SUCCESSFUL' | 'CREATE' | 'EXCLUDE',
  data: T
};

export type ServiceResponse<T> = ServiceResponseError | ServiceResponseSuccess<T>;