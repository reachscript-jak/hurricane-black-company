import { AxiosError } from 'axios'
import { SuccessResult, ErrorResult } from '../types/api'
import { axiosInstance } from './axiosInstance'
import { discernResponse, internalServerError } from '../responseHandling'

export default {
  async registFavorite(id: number): Promise<SuccessResult<any> | ErrorResult> {
    const response = await axiosInstance.post(`/favorite?post_id=${id}`).catch((e: AxiosError) => {
      if (e.isAxiosError) {　return internalServerError }
    });
    return discernResponse(response)
  }
}
