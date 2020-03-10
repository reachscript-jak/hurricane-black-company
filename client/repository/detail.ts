import { AxiosError } from 'axios';

import axiosInstance from './axiosInstance';
import { internalServerError, genericError } from './share';
import { SuccessResult, ErrorResult } from '../types/api';

export default {
  async getDetail(id: number): Promise<SuccessResult<any> | ErrorResult> {
    const response = await axiosInstance.get(`/post/${id}`).catch((e: AxiosError) => {
      if (e.isAxiosError) {
        return internalServerError;
      }
    });
    if (response?.status === 200) {
      return {
        error: false,
        data: response.data,
        errorMessages: null,
      };
    } else {
      return genericError;
    }
  },
  async registComment(post_id: number, body: string, name: string): Promise<SuccessResult<null> | ErrorResult> {
    const response = await axiosInstance
      .post(`/comment`, {
        post_id,
        body,
        name,
      })
      .catch((e: AxiosError) => {
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
        data: null,
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
