# BeeGold – Landing page

Sitio web para BeeGold, una marca colombiana de ropa deportiva femenina. Lo construí con React y Vite porque quería practicar componentes reutilizables con algo real, no solo ejercicios inventados.

La idea era simple: una página que muestre los productos, explique la marca y lleve a la gente directo a WhatsApp para hacer pedidos.

**Sitio en vivo:** https://yeifer11.github.io/beegold/

---

## Qué tiene la página

- Hero con llamado a acción a WhatsApp
- Catálogo de 6 productos con tarjetas reutilizables
- Sección de colores disponibles para pedidos
- "Sobre nosotras" con estadísticas de la marca
- FAQ con acordeón (solo una respuesta abierta a la vez)
- Grid de fotos estilo Instagram
- Sección de contacto con horarios
- Botón flotante de WhatsApp en toda la página
- Diseño responsive (mobile, tablet, desktop)

---

## Stack

- **React 18** — componentes, estado, eventos
- **Vite 5** — dev server y build de producción
- **CSS puro con variables** — sin frameworks, la paleta está en `:root`
- **GitHub Actions** — deploy automático cuando hago push a main

---

## Cómo correrlo localmente

```bash
git clone https://github.com/Yeifer11/beegold.git
cd beegold
npm install
npm run dev
```

Abre http://localhost:5173. Cualquier cambio que hagas en el código se actualiza al instante.

---

## Estructura

```
src/
├── components/     # cada sección de la página es su propio componente
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── Catalog.jsx
│   ├── ProductCard.jsx   ← reutilizable, se renderiza 6 veces
│   ├── Colors.jsx
│   ├── About.jsx
│   ├── FAQ.jsx
│   ├── Instagram.jsx
│   ├── Contact.jsx
│   ├── Footer.jsx
│   └── WhatsAppFloat.jsx
├── data/           # los datos separados de la UI
│   ├── products.js
│   ├── colors.js
│   └── faqs.js
├── styles/
│   └── global.css
└── utils/
    └── assets.js
```

Los datos (productos, colores, FAQs) están separados de los componentes a propósito. Si el día de mañana quiero conectar esto a un CMS o base de datos, solo toco esos archivos.

---

## Editar contenido

**Cambiar número de WhatsApp** → `src/data/products.js`, primera línea:
```js
export const WHATSAPP_NUMBER = '573118525167'
```

**Agregar un producto** → `src/data/products.js`, añadir al array:
```js
{
  id: 'set-verde',
  name: 'Set Acanalado Verde',
  description: 'Top y leggins en verde militar.',
  price: 130000,
  image: '/images/set-verde.jpg',  // poner la foto en public/images/
  badge: 'Nuevo',
  colorDots: [{ hex: '#4a6b3a', label: 'Verde' }],
  waMessage: 'Hola! Quiero el Set Verde 💚 $130.000',
}
```

**Cambiar colores del sitio** → `src/styles/global.css`, sección `:root`:
```css
--gold: #c8962a;
--gold-light: #e4b84a;
```

---

## Lo que hice ✓

- [x] Estructura del proyecto organizada por componentes
- [x] Catálogo con 6 productos reales y datos separados
- [x] Diseño responsive desde cero con CSS variables
- [x] Integración con WhatsApp (botón flotante + CTA por producto)
- [x] FAQ con acordeón animado
- [x] Deploy automático a GitHub Pages con GitHub Actions

---

## Lo que podría hacer después

> Estas son ideas para cuando tenga tiempo o quiera seguir practicando cosas nuevas.

- [ ] **Carrito de compras** — guardar productos seleccionados antes de ir a WhatsApp, con `useReducer` o quizás Zustand
- [ ] **Modal de detalle del producto** — que al hacer clic en una tarjeta se abra una vista más grande con más fotos
- [ ] **Filtros en el catálogo** — por color, precio, categoría
- [ ] **Lazy loading de imágenes** — ya lo soportan todos los navegadores con `loading="lazy"`, es un cambio de una línea
- [ ] **Migrar a TypeScript** — validar los tipos de los productos y props de componentes
- [ ] **Conectar un CMS** — Sanity o Contentful para que la dueña pueda actualizar productos sin tocar código
- [ ] **Pasarela de pagos** — Wompi o Mercado Pago en vez de solo WhatsApp
- [ ] **Tests** — empezar con Vitest + Testing Library para los componentes principales
- [ ] **Next.js / SSR** — si el SEO empieza a importar de verdad, migrar para que Google indexe bien el contenido

---

Hecho en Colombia 🇨🇴
