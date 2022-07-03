import { createApi } from '@/api/createApi';
import { isProduction } from '@/utils/env';

export const {
  get,
  post,
  put,
  patch,
  del,
} = createApi({
  url: isProduction ? String(import.meta.env.VITE_APP_API_URL) : '/api',
});
