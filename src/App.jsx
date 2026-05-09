// App arma la landing completa. Lo dejo como una lista de secciones para que
// sea facil mover, quitar o agregar bloques sin tener que buscar por todo el proyecto.
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
    // El fragment evita meter un div extra solo para envolver la pagina.
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
