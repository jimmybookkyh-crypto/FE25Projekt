import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // la till hela den följande del för att kunna bypassera CORS då API ej stödde det
  plugins: [react()],
    server: {                   
    proxy: {
      "/api": {
        target: "https://www.mmobomb.com",
        changeOrigin: true,
        secure: true,
        rewrite: (path) => path.replace(/^\/api/, "")
      }
    }
  }
})
