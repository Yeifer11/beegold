// Datos del catalogo. La idea es que los productos se puedan cambiar desde aqui
// sin tocar los componentes que pintan la interfaz.

// Numero de WhatsApp del negocio, en formato internacional y sin el signo +.
export const WHATSAPP_NUMBER = '573118525167'

// Arma un enlace de WhatsApp con mensaje listo. encodeURIComponent evita que
// espacios, tildes o simbolos rompan la URL.
export const buildWhatsAppLink = (mensaje) => {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(mensaje)}`
}

// Cada objeto representa una tarjeta del catalogo. Si se agrega otro producto,
// Catalog.jsx lo muestra automaticamente porque recorre este arreglo.
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
    badge: null,
    colorDots: [
      { hex: '#8ab8d8', label: 'Azul cielo' },
      { hex: '#1e3a6e', label: 'Azul marino' },
      { hex: '#7a4a30', label: 'Café' },
    ],
    waMessage: 'Hola! Quiero más info sobre los sets BeeGold 🐝',
    ctaLabel: 'Consultar',
  },
]
