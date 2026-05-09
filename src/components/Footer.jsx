// ============================================================================
//  COMPONENTE FOOTER
// ============================================================================
//  Pie de página con logo, copyright y enlaces.
// ============================================================================

function Footer() {
  // Calculamos el año dinámicamente — así no tienes que editarlo cada año
  const currentYear = new Date().getFullYear()

  return (
    <footer>
      <div className="footer-logo">
        BEE<span>GOLD</span>
      </div>
      <div className="footer-copy">
        © {currentYear} BeeGold · Train Hard · Colombia
      </div>
      <div className="footer-links">
        <a href="#catalogo">Catálogo</a>
        <a href="#sobre">Nosotras</a>
        <a
          href="https://wa.me/573118525167"
          target="_blank"
          rel="noopener noreferrer"
        >
          WhatsApp
        </a>
      </div>
    </footer>
  )
}

export default Footer
