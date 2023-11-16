import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import autoprefixer from 'autoprefixer';
import postCSSNested from 'postcss-nested';
import svgr from "vite-plugin-svgr";
import path from "path";


// https://vitejs.dev/config/
export default defineConfig({
  base: '/insect-360/',
  resolve: {
    alias: {
      '@assets': path.resolve(__dirname, './src/assets'),
      '@components': path.resolve(__dirname, './src/components'),
      '@utils': path.resolve(__dirname, './src/utils'),
      '@hooks': path.resolve(__dirname, './src/hooks'),
      '@contexts': path.resolve(__dirname, './src/contexts'),
      '@pageComponents': path.resolve(__dirname, './src/components/pages')
    },
  },
  plugins: [
    react(),
    svgr()
  ],
  css: {
    postcss: {
      plugins: [
        autoprefixer(),
        postCSSNested()
      ],
    }
  },
  server: {
    host: true,
    open: true,
  }
})
