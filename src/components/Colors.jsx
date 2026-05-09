// ============================================================================
//  COMPONENTE COLORS
// ============================================================================
//  Sección que muestra todos los colores disponibles como círculos (swatches).
//  Igual que Catalog: mapeamos sobre el array de colores.
// ============================================================================

import { colors } from '../data/colors.js'
import { buildWhatsAppLink } from '../data/products.js'

function Colors() {
  const waLink = buildWhatsAppLink(
    'Hola! Quiero saber sobre los colores disponibles 🐝'
  )

  return (
    <section id="colores">
      <div className="section-header">
        <span className="section-tag">Variedad</span>
        <h2 className="section-title">Colores Disponibles</h2>
        <p className="section-sub">
          Todos los sets están disponibles en estos colores. Escríbenos para
          confirmar disponibilidad.
        </p>
        <div className="divider"></div>
      </div>

      <div className="colores-grid">
        {colors.map((color) => (
          <div key={color.label} className="color-item">
            <div
              className="color-swatch"
              style={{
                background: color.hex,
                // Si el color trae un borderHex (caso 'Crema' que es muy claro),
                // lo aplicamos. Si no, deja el borde por defecto del CSS.
                borderColor: color.borderHex || undefined,
              }}
            />
            <span className="color-label">{color.label}</span>
          </div>
        ))}
      </div>

      <p className="colores-cta">
        ¿No ves tu color favorito?{' '}
        <a href={waLink} target="_blank" rel="noopener noreferrer">
          Escríbenos
        </a>{' '}
        — podemos conseguirlo.
      </p>
    </section>
  )
}

export default Colors
