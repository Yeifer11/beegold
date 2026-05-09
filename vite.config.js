import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // Plugin oficial para que Vite entienda React y JSX.
  plugins: [react()],

  // GitHub Pages publica este proyecto dentro de /beegold/.
  base: '/beegold/',
})
