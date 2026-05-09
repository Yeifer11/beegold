// ============================================================================
//  PUNTO DE ENTRADA DE LA APLICACIÓN REACT
// ============================================================================
//  Este archivo es el "main" del proyecto. Vite lo busca por el script tag en
//  index.html (<script src="/src/main.jsx">). Aquí React toma el control del
//  div con id="root" y empieza a renderizar todo lo que viene de App.jsx.
// ============================================================================

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './styles/global.css' // todos los estilos globales

// createRoot es la API moderna de React 18 (antes era ReactDOM.render)
createRoot(document.getElementById('root')).render(
  // StrictMode activa chequeos extra en desarrollo (NO afecta a producción)
  // Por ejemplo, te avisa si usas APIs deprecadas o efectos con problemas.
  <StrictMode>
    <App />
  </StrictMode>
)
