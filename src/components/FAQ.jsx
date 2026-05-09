import { useState } from 'react'
import { faqs } from '../data/faqs.js'

function FAQ() {
  // Guarda cual pregunta esta abierta. null significa que todas estan cerradas.
  const [openId, setOpenId] = useState(null)

  const handleToggle = (id) => {
    // Si le dan clic a la misma pregunta, se cierra. Si es otra, se abre esa.
    setOpenId(openId === id ? null : id)
  }

  return (
    <section id="faq">
      <div className="section-header">
        <span className="section-tag">Preguntas frecuentes</span>
        <h2 className="section-title">¿Tienes dudas?</h2>
        <div className="divider"></div>
      </div>

      <div className="faq-list">
        {faqs.map((faq) => {
          const isOpen = openId === faq.id

          return (
            <div
              key={faq.id}
              className={`faq-item ${isOpen ? 'open' : ''}`}
            >
              <button
                className="faq-q"
                onClick={() => handleToggle(faq.id)}
                aria-expanded={isOpen}
              >
                {faq.question}
                <span className="faq-icon">+</span>
              </button>

              {/* El CSS se encarga de animar esta respuesta cuando el item tiene la clase open. */}
              <div className="faq-a">{faq.answer}</div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default FAQ
