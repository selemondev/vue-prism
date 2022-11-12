import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      'tailwind.config.cjs': path.resolve(__dirname, 'tailwind.config.cjs'),
    },
  },
  optimizeDeps: {
    include: [
      'tailwind.config.cjs',
    ]
  }
})
