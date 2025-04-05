import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import autoprefixer from "autoprefixer";
import svgr from "vite-plugin-svgr";
import path from "path";
import tailwind from "tailwindcss";
import tailwindNesting from "tailwindcss/nesting";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@contexts": path.resolve(__dirname, "./src/contexts"),
      "@data": path.resolve(__dirname, "./src/data"),
      "@hooks": path.resolve(__dirname, "./src/hooks"),
      "@pageComponents": path.resolve(__dirname, "./src/components/pages"),
      "@utils": path.resolve(__dirname, "./src/utils"),
    },
  },
  plugins: [react(), svgr()],
  css: {
    postcss: {
      plugins: [tailwindNesting(), tailwind(), autoprefixer()],
    },
  },
  server: {
    host: true,
    open: true,
  },
});
