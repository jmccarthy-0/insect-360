import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import autoprefixer from 'autoprefixer';
import postCSSNested from 'postcss-nested';

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [
    react()
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
    host: true
  }
})
