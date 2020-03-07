interface internalServerError {
  error: boolean,
  errorMessages: Array<string>,
  status: number,
  data: null
}

interface responseSuccess {
  error: boolean,
  errorMessages: null
  data: object
}

interface genericError {
  error: boolean,
  errorMessages: Array<string>,
  data: null
}

const responseSuccess = (response: responseSuccess) => {
  return {
    error: false,
    data: response.data,
    errorMessages: null,
  }
}

const genericError = {
  error: true,
  data: null,
  errorMessages: ['システムエラーが発生しました。時間をおいて再度お試しください。'],
}

export const internalServerError: internalServerError = (
  {
    error: true,
    errorMessages: ['システムエラーが発生しました。時間をおいて再度お試しください。'],
    status: 500,
    data: null
  }
)

export const discernResponse = (response: any) => {
  if (response.status === 200) {
    return responseSuccess(response)
  } else {
    return genericError
  }
}
