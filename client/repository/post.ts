import { AxiosError } from 'axios';

import axiosInstance from '../repository/axiosInstance';
import { internalServerError, genericError } from './share';
import { SuccessResult, ErrorResult } from '../types/api';

export default {
  async getPosts(count: number, orderBy: string, keyword: string): Promise<SuccessResult<any> | ErrorResult> {
    const response = await axiosInstance
      .get(`/post?count=${count}&order_by=${orderBy}&keyword=${keyword}`)
      .catch((e: AxiosError) => {
        if (e.isAxiosError) {
          return internalServerError;
        }
      });
    if (response?.status === 200) {
      console.log(response.data);
      return {
        error: false,
        data: response.data,
        errorMessages: null,
      };
    } else {
      return genericError;
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
          return internalServerError;
        }
      });
    if (response?.status === 200) {
      return {
        error: false,
        data: null,
        errorMessages: null,
      };
    } else {
      return genericError;
    }
  },
};
