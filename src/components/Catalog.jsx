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
        {/* El catalogo sale completo desde products.js. Asi no repetimos tarjetas a mano. */}
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}

export default Catalog
