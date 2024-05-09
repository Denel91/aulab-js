import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "node:path";
import * as url from "node:url";
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})

console.log(__dirname);
