// ============================================================================
//  COMPONENTE APP - Composición de toda la página
// ============================================================================
//  Este es el componente "padre" que reúne todas las secciones de la landing.
//  Cada sección está en su propio archivo en /components para mantener todo
//  ordenado y reutilizable.
//
//  Si en el futuro quieres agregar/quitar secciones, solo edita este archivo.
// ============================================================================

import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Catalog from './components/Catalog.jsx'
import Colors from './components/Colors.jsx'
import About from './components/About.jsx'
import FAQ from './components/FAQ.jsx'
import Instagram from './components/Instagram.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import WhatsAppFloat from './components/WhatsAppFloat.jsx'

function App() {
  return (
    // Fragment <>...</> permite devolver múltiples elementos sin un div extra
    <>
      <Navbar />
      <Hero />
      <Catalog />
      <Colors />
      <About />
      <FAQ />
      <Instagram />
      <Contact />
      <Footer />
      <WhatsAppFloat />
    </>
  )
}

export default App
