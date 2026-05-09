import { imagePath } from '../utils/assets.js'

const INSTAGRAM_URL = 'https://instagram.com/beegold'

// Fotos que simulan una mini galeria de Instagram.
const instaPhotos = [
  { src: imagePath('set-rosado.jpg'), alt: 'Instagram 1' },
  { src: imagePath('set-azul-cielo.jpg'), alt: 'Instagram 2' },
  { src: imagePath('set-azul-marino.jpg'), alt: 'Instagram 3' },
  { src: imagePath('set-negro.jpg'), alt: 'Instagram 4' },
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
          // En esta galeria fija el index funciona bien como key.
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
