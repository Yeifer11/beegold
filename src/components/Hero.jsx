// ============================================================================
//  COMPONENTE HERO
// ============================================================================
//  Sección principal de la landing (lo primero que ve el usuario).
//  Tiene 2 columnas: texto a la izquierda, grid de imágenes a la derecha.
// ============================================================================

import { buildWhatsAppLink } from '../data/products.js'

function Hero() {
  // Construimos el link de WhatsApp con un mensaje pre-llenado
  const waLink = buildWhatsAppLink(
    'Hola! Quiero más info sobre los sets BeeGold 🐝'
  )

  return (
    <section id="hero">
      {/* Columna izquierda: texto + botones */}
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

      {/* Columna derecha: grid de 3 imágenes (1 grande + 2 pequeñas) */}
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
