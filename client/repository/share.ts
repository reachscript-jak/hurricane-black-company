export const genericError = {
  error: true,
  data: null,
  errorMessages: ['システムエラーが発生しました。時間をおいて再度お試しください。'],
};

export const internalServerError = {
  error: true,
  errorMessages: ['システムエラーが発生しました。時間をおいて再度お試しください。'],
  status: 500,
  data: null,
};
