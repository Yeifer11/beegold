import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // IMPORTANTE: si vas a desplegar en GitHub Pages, cambia './' por '/nombre-del-repo/'
  // Ejemplo: si tu repo se llama 'beegold', usa: base: '/beegold/'
  // Si despliegas en Vercel, Netlify o un dominio propio, deja './' o '/'
  base: './',
})
