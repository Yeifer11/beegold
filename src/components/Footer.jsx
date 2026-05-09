function Footer() {
  // Asi el año se actualiza solo cuando cambie el calendario.
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
