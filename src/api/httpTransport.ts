import axios from 'axios';
import { AbstractRequestProps, ApiResponse } from '@/types/httpTransport';

const baseURL = String(import.meta.env.VITE_API_BASE_URL);

const api = axios.create({
  baseURL,
});

const request = async (
  { method, path, payload }: AbstractRequestProps,
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
      response: data || null,
      headers: headers || null,
    };
  } catch (err: any) {
    return {
      result: false,
      status: err.response?.status,
      response: err.response?.data || null,
    };
  }
};

export const get = (
  path: string,
  queryParams?: Record<any, any>,
) => request(
  {
    method: 'get',
    path,
    payload: { params: queryParams },
  },
);

export const post = (
  path: string,
  payload?: any,
) => request(
  {
    method: 'post',
    path,
    payload,
  },
);

export const put = (
  path: string,
  payload?: any,
) => request(
  {
    method: 'put',
    path,
    payload,
  },
);

export const patch = (
  path: string,
  payload?: any,
) => request(
  {
    method: 'patch',
    path,
    payload: { data: payload },
  },
);

export const deleteMethod = (
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
