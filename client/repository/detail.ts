import { AxiosError } from 'axios';
import { SuccessResult, ErrorResult } from '../types/api';
import axiosInstance from './axiosInstance';

export default {
  async getDetail(id: number): Promise<SuccessResult<any> | ErrorResult> {
    const response = await axiosInstance.get(`/post/${id}`).catch((e: AxiosError) => {
      if (e.isAxiosError) {
        return {
          error: true,
          errorMessages: ['システムエラーが発生しました。時間をおいて再度お試しください。'],
          status: 500,
          data: null,
        };
      }
    });
    if (response?.status === 200) {
      return {
        error: false,
        data: response.data,
        errorMessages: null,
      };
    } else {
      return {
        error: true,
        data: null,
        errorMessages: ['システムエラーが発生しました。時間をおいて再度お試しください。'],
      };
    }
  },
};
