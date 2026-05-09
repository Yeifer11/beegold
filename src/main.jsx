// Punto de entrada de React. Vite llega aqui desde index.html y monta toda la app
// dentro del div con id "root".
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './styles/global.css'

createRoot(document.getElementById('root')).render(
  // StrictMode ayuda en desarrollo mostrando advertencias utiles de React.
  <StrictMode>
    <App />
  </StrictMode>
)
