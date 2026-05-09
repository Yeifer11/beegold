import { buildWhatsAppLink } from '../data/products.js'

// Informacion que aparece en la columna izquierda de contacto.
const contactInfo = [
  { icon: '📱', label: 'WhatsApp', value: '+57 311 852 5167' },
  { icon: '📸', label: 'Instagram', value: '@beegold' },
  { icon: '🐝', label: 'Lema', value: 'Bee Strong, Bee Gold' },
]

// Horarios separados del JSX para que sean faciles de actualizar.
const hours = [
  { day: 'Lunes – Viernes', time: '9am – 7pm' },
  { day: 'Sábado', time: '10am – 5pm' },
  { day: 'Domingo', time: 'Solo pedidos urgentes' },
]

function Contact() {
  const waLink = buildWhatsAppLink('Hola! Quiero pedir un set BeeGold 🐝 ')

  return (
    <section id="contacto">
      <div className="contacto-inner">
        <div className="contacto-left">
          <div className="section-header">
            <span className="section-tag">Contáctanos</span>
            <h2 className="section-title">Estamos aquí para ti</h2>
            <div className="divider"></div>
          </div>

          <div className="contacto-info">
            {contactInfo.map((item) => (
              <div key={item.label} className="contact-row">
                <div className="contact-icon">{item.icon}</div>
                <div>
                  <div className="contact-label">{item.label}</div>
                  <div className="contact-value">{item.value}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="hours">
            <div className="hours-title">Horario de atención</div>
            {hours.map((row) => (
              <div key={row.day} className="hours-row">
                <span>{row.day}</span>
                <span>{row.time}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="contacto-right">
          <h3>¿Lista para tu set?</h3>
          <p className="intro">
            Escríbenos directo por WhatsApp, cuéntanos tu talla y el color
            que quieres. Te respondemos en minutos.
          </p>

          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="wa-big"
          >
            {/* Icono de WhatsApp en SVG para no depender de otra libreria. */}
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            Pedir por WhatsApp
          </a>

          <p className="form-note">
            También puedes escribirnos directamente al
            <br />
            <strong>+57 311 852 5167</strong>
          </p>
        </div>
      </div>
    </section>
  )
}

export default Contact
