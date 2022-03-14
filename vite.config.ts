import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import eslintPlugin from 'vite-plugin-eslint';
import friendlyTypeImports from 'rollup-plugin-friendly-type-imports';
import pagesPlugin from 'vite-plugin-pages';
import svgLoader from 'vite-svg-loader';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      reactivityTransform: true,
    }),
    // eslintPlugin(),
    friendlyTypeImports(),
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
});
