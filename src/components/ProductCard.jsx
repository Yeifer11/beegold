import { buildWhatsAppLink } from '../data/products.js'

function ProductCard({ product }) {
  // Sacamos del objeto solo lo que necesita esta tarjeta.
  const {
    name,
    description,
    price,
    image,
    badge,
    colorDots,
    waMessage,
    ctaLabel,
  } = product

  // Formato colombiano para que 130000 se vea como 130.000.
  const priceFormatted = price.toLocaleString('es-CO')

  return (
    <div className="product-card">
      <div className="product-img-wrap">
        {/* Algunos productos tienen etiqueta, otros no. */}
        {badge && <span className="product-badge">{badge}</span>}
        <img src={image} alt={name} />
      </div>

      <div className="product-info">
        <h3 className="product-name">{name}</h3>
        <p className="product-desc">{description}</p>

        <div className="product-footer">
          <div className="product-price">
            ${priceFormatted} <span>COP</span>
          </div>

          {/* Los punticos resumen los colores relacionados con el producto. */}
          <div className="product-colors">
            {colorDots.map((dot) => (
              <div
                key={dot.hex}
                className="color-dot"
                style={{ background: dot.hex }}
                title={dot.label}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Cada producto abre WhatsApp con su propio mensaje preparado. */}
      <a
        href={buildWhatsAppLink(waMessage)}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-wa"
      >
        {ctaLabel || 'Pedir por WhatsApp'}
      </a>
    </div>
  )
}

export default ProductCard
