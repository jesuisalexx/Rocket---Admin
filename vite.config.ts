import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import eslintPlugin from 'vite-plugin-eslint';
import pagesPlugin from 'vite-plugin-pages';
import svgLoader from 'vite-svg-loader';
import path from 'path';

require('dotenv').config();

console.log(process.env.VITE_APP_API_URL);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      reactivityTransform: true,
    }),
    // eslintPlugin(),
    svgLoader({
      svgo: false,
    }),
    pagesPlugin(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@root': path.resolve(__dirname, ''),
    },
  },
  server: {
    proxy: {
      '/api': {
        target: process.env.VITE_APP_API_URL,
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
    watch: {
      usePolling: true,
    },
  },
});
