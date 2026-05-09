import { buildWhatsAppLink } from '../data/products.js'

function Hero() {
  // Mensaje general para quien llega y todavia no eligio un producto puntual.
  const waLink = buildWhatsAppLink(
    'Hola! Quiero más info sobre los sets BeeGold 🐝'
  )

  return (
    <section id="hero">
      {/* Primer pantallazo: propuesta de valor y botones principales. */}
      <div className="hero-left">
        <p className="hero-tag">
          Nueva Colección · Ropa Deportiva Femenina
        </p>
        <h1 className="hero-title">
          Bee <em>Strong,</em>
          <br />
          Bee Gold
        </h1>
        <p className="hero-sub">
          Sets deportivos diseñados para moldear tu figura y acompañarte
          en cada entrenamiento. Calidad premium, estilo sin límites.
        </p>
        <div className="hero-actions">
          <a href="#catalogo" className="btn-primary">
            Ver Colección
          </a>
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            Pedir por WhatsApp
          </a>
        </div>
      </div>

      {/* Mosaico de imagenes para que la marca se sienta visual desde el inicio. */}
      <div className="hero-right">
        <div className="hero-img hero-img-big">
          <img src="/images/set-azul-cielo.jpg" alt="Set Azul Cielo" />
        </div>
        <div className="hero-img">
          <img src="/images/set-rosado.jpg" alt="Set Rosado" />
        </div>
        <div className="hero-img">
          <img src="/images/set-negro.jpg" alt="Set Negro" />
        </div>
      </div>
    </section>
  )
}

export default Hero
