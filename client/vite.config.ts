import { defineConfig } from 'vite'
import * as path from 'path'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:5000",
        changeOrigin: true,
        secure: false,
        ws: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
    port: 5173,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  plugins: [react()]
})
