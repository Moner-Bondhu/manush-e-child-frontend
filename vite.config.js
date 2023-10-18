import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
process.env = {...process.env, ...loadEnv('development', process.cwd())};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    proxy: {
      '/api': {
          target: process.env.VITE_BACKEND_URL,
          changeOrigin: true,
          secure: false,      
          ws: true,
      }
    } 
  }
})
