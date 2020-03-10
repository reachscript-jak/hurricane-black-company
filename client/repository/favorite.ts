import { AxiosError } from 'axios';

import { axiosInstance } from './axiosInstance';
import { internalServerError, genericError } from './share';
import { SuccessResult, ErrorResult } from '../types/api';

export default {
  async registFavorite(id: number): Promise<SuccessResult<any> | ErrorResult> {
    const response = await axiosInstance.post(`/favorite?post_id=${id}`).catch((e: AxiosError) => {
      if (e.isAxiosError) {
        return internalServerError;
      }
    });
    if (response?.status === 200) {
      return {
        error: false,
        data: response?.data,
        errorMessages: null,
      };
    } else {
      return genericError;
    }
  },
};
