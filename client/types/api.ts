export interface SuccessResult<T> {
  error: boolean;
  data: T | null;
  errorMessages: null;
}

export interface ErrorResult {
  error: boolean;
  data: null;
  errorMessages: Array<string>;
}
