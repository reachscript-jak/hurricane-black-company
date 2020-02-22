import { AxiosError } from 'axios';
import { SuccessResult, ErrorResult } from '../types/api';
import axiosInstance from '../repository/axiosInstance';

export default {
  async getPosts(count: number, orderBy: string): Promise<SuccessResult<any> | ErrorResult> {
    const response = await axiosInstance.get(`/post?count=${count}&order_by=${orderBy}`).catch((e: AxiosError) => {
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
  async registPost(title: string, body: string, name: string): Promise<SuccessResult<null> | ErrorResult> {
    const response = await axiosInstance
      .post(`/post`, {
        title,
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
