// ============================================================================
//  COMPONENTE INSTAGRAM
// ============================================================================
//  Grid de 4 fotos que simulan el feed de Instagram.
//  Cada foto tiene un overlay que aparece en hover (efecto en CSS).
// ============================================================================

const INSTAGRAM_URL = 'https://instagram.com/beegold'

// Definimos las fotos como datos para que sea fácil cambiarlas en el futuro
const instaPhotos = [
  { src: '/images/set-rosado.jpg', alt: 'Instagram 1' },
  { src: '/images/set-azul-cielo.jpg', alt: 'Instagram 2' },
  { src: '/images/set-azul-marino.jpg', alt: 'Instagram 3' },
  { src: '/images/set-negro.jpg', alt: 'Instagram 4' },
]

function Instagram() {
  return (
    <section id="instagram">
      <div className="section-header">
        <span className="section-tag">Síguenos</span>
        <h2 className="section-title">@beegold</h2>
        <p className="section-sub">
          Únete a nuestra comunidad de mujeres que entrenan con estilo.
        </p>
        <div className="divider"></div>
      </div>

      <div className="insta-grid">
        {instaPhotos.map((photo, index) => (
          // Aquí 'index' es aceptable como key porque la lista no cambia
          // dinámicamente. Si fuera dinámica, sería mejor usar un id único.
          <div key={index} className="insta-item">
            <img src={photo.src} alt={photo.alt} />
            <div className="insta-overlay">
              <span className="insta-icon">📸</span>
            </div>
          </div>
        ))}
      </div>

      <div className="insta-cta">
        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
        >
          Seguir en Instagram
        </a>
      </div>
    </section>
  )
}

export default Instagram
