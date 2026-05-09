import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // Plugin oficial para que Vite entienda React y JSX.
  plugins: [react()],

  // './' hace que las rutas funcionen bien en un hosting estatico.
  // Para GitHub Pages tambien puede usarse '/beegold/' si se publica desde ese repo.
  base: './',
})
