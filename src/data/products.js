// ============================================================================
//  DATOS DE PRODUCTOS
// ============================================================================
//  Separamos los datos de los componentes (UI) para poder editar productos sin
//  tocar el JSX. Esto se llama "separación de responsabilidades".
//  Si en el futuro conectas un backend o un CMS, solo cambias este archivo.
// ============================================================================

// Número de WhatsApp del negocio (sin '+', sin espacios)
export const WHATSAPP_NUMBER = '573118525167'

/**
 * Genera el link de WhatsApp con un mensaje pre-llenado.
 * @param {string} mensaje - Texto que se enviará al abrir WhatsApp
 * @returns {string} URL completa de WhatsApp
 */
export const buildWhatsAppLink = (mensaje) => {
  // encodeURIComponent convierte espacios y emojis en caracteres seguros para URL
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(mensaje)}`
}

/**
 * Lista de productos del catálogo.
 * Cada producto tiene un id único (clave en React), nombre, descripción,
 * precio, imagen y los colores disponibles representados como puntos.
 */
export const products = [
  {
    id: 'set-rosado',
    name: 'Set Acanalado Rosado',
    description:
      'Top sin mangas + leggins de cintura alta. Tela acanalada con compresión suave.',
    price: 130000,
    image: '/images/set-rosado.jpg',
    badge: 'Disponible',
    colorDots: [{ hex: '#e879a0', label: 'Rosado' }],
    waMessage: 'Hola! Quiero el Set Acanalado Rosado 💗 $130.000',
  },
  {
    id: 'set-azul-cielo',
    name: 'Set Acanalado Azul Cielo',
    description:
      'Top manga corta con espalda abierta + leggins acanalados de cintura alta.',
    price: 130000,
    image: '/images/set-azul-cielo.jpg',
    badge: 'Disponible',
    colorDots: [{ hex: '#8ab8d8', label: 'Azul cielo' }],
    waMessage: 'Hola! Quiero el Set Azul Cielo 💙 $130.000',
  },
  {
    id: 'set-azul-marino',
    name: 'Set Acanalado Azul Marino',
    description:
      'Top manga corta + leggins de cintura alta en azul marino profundo.',
    price: 130000,
    image: '/images/set-azul-marino.jpg',
    badge: 'Disponible',
    colorDots: [{ hex: '#1e3a6e', label: 'Azul marino' }],
    waMessage: 'Hola! Quiero el Set Azul Marino 💙 $130.000',
  },
  {
    id: 'set-cafe',
    name: 'Set Acanalado Café',
    description:
      'Top manga corta + leggins acanalados en tono café terroso y cálido.',
    price: 130000,
    image: '/images/set-cafe.jpg',
    badge: 'Disponible',
    colorDots: [{ hex: '#7a4a30', label: 'Café' }],
    waMessage: 'Hola! Quiero el Set Café 🤎 $130.000',
  },
  {
    id: 'set-negro',
    name: 'Set Acanalado Negro',
    description:
      'Top manga larga con puños + leggins de cintura alta. Ideal para días fríos.',
    price: 130000,
    image: '/images/set-negro.jpg',
    badge: 'Disponible',
    colorDots: [{ hex: '#1a1a1a', label: 'Negro' }],
    waMessage: 'Hola! Quiero el Set Negro 🖤 $130.000',
  },
  {
    id: 'detalle-espalda',
    name: 'Detalle Espalda Abierta',
    description:
      'Los tops con manga corta tienen un diseño de espalda descubierta exclusivo.',
    price: 130000,
    image: '/images/set-azul-trasero.jpg',
    badge: null, // sin badge
    colorDots: [
      { hex: '#8ab8d8', label: 'Azul cielo' },
      { hex: '#1e3a6e', label: 'Azul marino' },
      { hex: '#7a4a30', label: 'Café' },
    ],
    waMessage: 'Hola! Quiero más info sobre los sets BeeGold 🐝',
    ctaLabel: 'Consultar', // texto custom para el botón
  },
]
