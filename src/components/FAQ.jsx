// ============================================================================
//  COMPONENTE FAQ (Preguntas Frecuentes)
// ============================================================================
//  Acordeón: solo una pregunta puede estar abierta a la vez.
//  Si haces clic en otra, se abre esa y se cierra la anterior.
//  Si haces clic en la que ya está abierta, se cierra.
//
//  Concepto clave: ESTADO COMPARTIDO ENTRE HIJOS
//  En vez de que cada FAQItem maneje su propio estado, el padre (FAQ) sabe
//  cuál está abierta. Así garantizamos que solo haya una abierta a la vez.
//  Esto se llama "lifting state up" (subir el estado al ancestro común).
// ============================================================================

import { useState } from 'react'
import { faqs } from '../data/faqs.js'

function FAQ() {
  // Guarda el ID de la pregunta abierta. null = ninguna abierta.
  const [openId, setOpenId] = useState(null)

  /**
   * Maneja el click en una pregunta:
   * - Si la pregunta ya estaba abierta, la cerramos (null)
   * - Si era otra, la marcamos como abierta
   */
  const handleToggle = (id) => {
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
              {/* Botón clickable que pregunta. onClick llama a handleToggle */}
              <button
                className="faq-q"
                onClick={() => handleToggle(faq.id)}
                aria-expanded={isOpen}
              >
                {faq.question}
                <span className="faq-icon">+</span>
              </button>

              {/* La respuesta. La animación de apertura/cierre se hace en CSS
                  con max-height + transition. Ver global.css */}
              <div className="faq-a">{faq.answer}</div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default FAQ
