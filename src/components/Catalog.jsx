// ============================================================================
//  COMPONENTE CATALOG
// ============================================================================
//  Sección que muestra todos los productos en una grilla.
//
//  Concepto clave: RENDERIZAR LISTAS CON .map()
//  Tomamos el array de productos (importado desde data/products.js) y por cada
//  uno generamos un <ProductCard>. React necesita una "key" única en cada
//  elemento (usamos product.id) para optimizar re-renders.
// ============================================================================

import ProductCard from './ProductCard.jsx'
import { products } from '../data/products.js'

function Catalog() {
  return (
    <section id="catalogo">
      <div className="section-header">
        <span className="section-tag">Colección</span>
        <h2 className="section-title">Nuestros Sets</h2>
        <p className="section-sub">
          Cada set incluye top y leggins de alta compresión. Disponibles en
          múltiples colores.
        </p>
        <div className="divider"></div>
      </div>

      <div className="product-grid">
        {/* Por cada producto del array, renderizamos una ProductCard.
            La 'key' debe ser única (usamos el id) para que React identifique
            cada elemento si la lista cambia. */}
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}

export default Catalog
