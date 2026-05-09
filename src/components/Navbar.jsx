import { useEffect, useState } from 'react'

function Navbar() {
  // Este estado solo controla si la barra ya debe mostrar sombra.
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    // Cuando el usuario baja un poco, cambiamos la clase del nav.
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)
    }

    window.addEventListener('scroll', handleScroll)

    // Se limpia el evento por buena practica, sobre todo si luego la app crece.
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav id="navbar" className={scrolled ? 'scrolled' : ''}>
      {/* Logo y nombre de la marca. El enlace devuelve al inicio de la pagina. */}
      <a href="#hero" className="nav-logo">
        <img src="/images/beegold-logo.jpeg" alt="BeeGold" />
        <div>
          <span className="nav-logo-text">BEEGOLD</span>
          <span className="nav-logo-sub">train hard</span>
        </div>
      </a>

      {/* Navegacion interna por secciones y un acceso rapido a WhatsApp. */}
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
