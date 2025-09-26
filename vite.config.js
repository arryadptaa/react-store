import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ⚠️ base harus sesuai dengan nama repo GitHub kamu
export default defineConfig({
  plugins: [react()],
  base: '/',
})
