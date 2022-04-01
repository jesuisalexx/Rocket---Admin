import axios from 'axios';
import { RequestProps, ApiResponse } from '@/types/httpTransport';
import { requestOnResolve, responseOnReject } from '@/api/interceptors';

export const createApi = ({
  url = '',
  headers = {},
}) => {
  const api = axios.create({
    baseURL: url,
    headers,
  });
  api.interceptors.request.use(requestOnResolve, ((error) => error));
  api.interceptors.response.use((response) => response, responseOnReject);

  const request = async (
    { method, path, payload }: RequestProps,
  ): Promise<ApiResponse<any>> => {
    try {
      // @ts-ignore
      const { status, data, headers } = await api[method](
        path,
        payload,
      );
      return {
        result: true,
        status,
        data: data || null,
        headers: headers || null,
      };
    } catch (err: any) {
      return {
        result: false,
        status: err.response?.status,
        data: err.response?.data || null,
      };
    }
  };

  const get = (
    path: string,
    queryParams?: Record<any, any>,
  ) => request(
    {
      method: 'get',
      path,
      payload: { params: queryParams },
    },
  );

  const post = (
    path: string,
    payload?: any,
  ) => request(
    {
      method: 'post',
      path,
      payload,
    },
  );

  const put = (
    path: string,
    payload?: any,
  ) => request(
    {
      method: 'put',
      path,
      payload,
    },
  );

  const patch = (
    path: string,
    payload?: any,
  ) => request(
    {
      method: 'patch',
      path,
      payload,
    },
  );

  const deleteMethod = (
    path: string,
    payload?: any,
  ) => request(
    {
      method: 'delete',
      path,
      payload: {
        data: payload,
      },
    },
  );

  return {
    get,
    post,
    put,
    patch,
    deleteMethod,
  };
};
