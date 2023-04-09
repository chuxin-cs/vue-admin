import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path, { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      /** @ 符号指向 src 目录 */
      "@": resolve(__dirname, "./src")
    }
  },
  plugins: [vue()],
})
