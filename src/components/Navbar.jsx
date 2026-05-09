// ============================================================================
//  COMPONENTE NAVBAR
// ============================================================================
//  Barra de navegación fija arriba con efecto: aparece una sombra cuando
//  el usuario hace scroll (más de 40px hacia abajo).
//
//  Conceptos clave:
//  - useState: guarda si la navbar tiene scroll o no (true/false)
//  - useEffect: registra un listener de scroll cuando el componente "monta"
//  - Cleanup function: removemos el listener cuando el componente desmonta
//    (esto evita memory leaks)
// ============================================================================

import { useEffect, useState } from 'react'

function Navbar() {
  // useState(false) = el estado inicial es false (no hay scroll todavía)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    // Función que se ejecuta cada vez que el usuario hace scroll
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)
    }

    // Suscribimos el listener al evento 'scroll' de la ventana
    window.addEventListener('scroll', handleScroll)

    // RETURN del useEffect = cleanup. React lo llama cuando el componente
    // desaparece (ej. al cambiar de página). Sin esto, dejaríamos listeners
    // colgados en memoria.
    return () => window.removeEventListener('scroll', handleScroll)
  }, []) // [] significa: ejecuta una sola vez al montar el componente

  return (
    <nav id="navbar" className={scrolled ? 'scrolled' : ''}>
      {/* Logo */}
      <a href="#hero" className="nav-logo">
        <img src="/images/beegold-logo.jpeg" alt="BeeGold" />
        <div>
          <span className="nav-logo-text">BEEGOLD</span>
          <span className="nav-logo-sub">train hard</span>
        </div>
      </a>

      {/* Menú de enlaces */}
      <div className="nav-links">
        <a href="#catalogo">Catálogo</a>
        <a href="#colores">Colores</a>
        <a href="#sobre">Nosotras</a>
        <a href="#faq">FAQ</a>
        <a href="#contacto">Contacto</a>
        <a
          href="https://wa.me/573118525167"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-cta"
        >
          Comprar
        </a>
      </div>
    </nav>
  )
}

export default Navbar
