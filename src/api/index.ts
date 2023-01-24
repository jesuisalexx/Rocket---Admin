import { isProduction } from '@/utils/env';
import { createHttpTransport } from '@/api/httpTransport';

export const {
  get,
  post,
  put,
  patch,
  del,
} = createHttpTransport({
  url: isProduction ? String(import.meta.env.VITE_APP_API_URL) : '/api',
});
