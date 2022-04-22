import { createApi } from '@/api/createApi';

export const {
  get,
  post,
  put,
  patch,
  del,
} = createApi({
  url: String(import.meta.env.VITE_API_BASE_URL),
});
