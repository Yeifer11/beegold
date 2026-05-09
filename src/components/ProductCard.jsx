// ============================================================================
//  COMPONENTE PRODUCT CARD
// ============================================================================
//  Tarjeta que muestra UN producto del catálogo.
//
//  Concepto clave: COMPONENTE REUTILIZABLE
//  En vez de copiar y pegar el mismo HTML 6 veces (una por cada producto),
//  hacemos UN componente que recibe los datos como "props" (parámetros).
//  Esto sigue el principio DRY: "Don't Repeat Yourself".
//
//  El componente Catalog usa este ProductCard 6 veces, pasándole datos
//  diferentes cada vez.
// ============================================================================

import { buildWhatsAppLink } from '../data/products.js'

/**
 * @param {Object} props
 * @param {Object} props.product - Objeto con los datos del producto
 *   (ver src/data/products.js para la estructura completa)
 */
function ProductCard({ product }) {
  // Desestructuramos las propiedades que necesitamos del producto
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

  // toLocaleString formatea el número con separadores de miles
  // Ejemplo: 130000 -> "130.000" (con punto en español)
  const priceFormatted = price.toLocaleString('es-CO')

  return (
    <div className="product-card">
      <div className="product-img-wrap">
        {/* Renderizado condicional: si hay badge, lo mostramos */}
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

          {/* Mapeamos los colores del producto a puntitos
              key={dot.hex} es OBLIGATORIO en React cuando renderizas listas */}
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

      {/* Botón principal: abre WhatsApp con el mensaje pre-llenado */}
      <a
        href={buildWhatsAppLink(waMessage)}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-wa"
      >
        {/* Si el producto trae ctaLabel, usamos ese texto. Si no, "Pedir por WhatsApp" */}
        {ctaLabel || 'Pedir por WhatsApp'}
      </a>
    </div>
  )
}

export default ProductCard
