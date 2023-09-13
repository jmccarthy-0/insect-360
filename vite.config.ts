import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import autoprefixer from 'autoprefixer';
import postCSSNested from 'postcss-nested';
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  base: '/insect-360/',
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
