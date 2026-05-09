# 🐝 BeeGold – Train Hard

Landing page comercial para **BeeGold**, marca colombiana de ropa deportiva femenina premium. Sitio estático construido con **React + Vite**, optimizado para conversión vía WhatsApp.

> _Bee Strong, Bee Gold_

![Stack](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white)
![Stack](https://img.shields.io/badge/Vite-5-646CFF?logo=vite&logoColor=white)
![License](https://img.shields.io/badge/license-MIT-green)

---

## 📋 Tabla de contenidos

- [Demo](#-demo)
- [Stack](#-stack)
- [Estructura del proyecto](#-estructura-del-proyecto)
- [Instalación local](#-instalación-local)
- [Scripts disponibles](#-scripts-disponibles)
- [Cómo modificar contenido](#-cómo-modificar-contenido)
- [Deploy](#-deploy)
- [Posibles mejoras futuras](#-posibles-mejoras-futuras)

---

## 🎯 Demo

El sitio incluye:

- **Hero** con CTA principal a WhatsApp.
- **Catálogo** con 6 productos (top + leggins acanalados en distintos colores).
- **Paleta de colores** disponibles para hacer pedidos personalizados.
- **Sección Sobre Nosotras** con stats.
- **FAQ** con acordeón animado (solo una abierta a la vez).
- **Grid de Instagram** con efecto hover.
- **Sección de contacto** con horarios y CTA grande de WhatsApp.
- **Botón flotante de WhatsApp** siempre visible.
- **Diseño 100% responsive** (mobile, tablet, desktop).

---

## 🛠 Stack

| Herramienta | Para qué |
|-------------|----------|
| **React 18** | Construcción de la UI por componentes reutilizables. |
| **Vite 5** | Build tool moderno: dev server rapidísimo y bundle optimizado en producción. |
| **CSS plano + variables** | Sin frameworks de estilos. La paleta vive en `:root` y es fácil de personalizar. |
| **gh-pages** | Deploy automático a GitHub Pages con un solo comando. |

**¿Por qué Vite y no Create React App (CRA)?** CRA está deprecated desde 2023. Vite es el estándar actual: arranca el dev server en milisegundos y produce builds más pequeños.

**¿Por qué no Tailwind / styled-components?** Para una landing relativamente sencilla, CSS plano con variables es más que suficiente, no agrega peso, y es más fácil de mantener para alguien junior.

---

## 📁 Estructura del proyecto

```
beegold/
├── public/
│   └── images/                  # Imágenes servidas tal cual (no procesadas por Vite)
│       ├── beegold-logo.jpeg
│       ├── set-rosado.jpg
│       ├── set-azul-cielo.jpg
│       ├── set-azul-marino.jpg
│       ├── set-cafe.jpg
│       ├── set-negro.jpg
│       └── set-azul-trasero.jpg
├── src/
│   ├── components/              # Cada sección de la página = un componente
│   │   ├── Navbar.jsx           # Barra superior fija (con efecto scroll)
│   │   ├── Hero.jsx             # Sección principal
│   │   ├── Catalog.jsx          # Grilla de productos
│   │   ├── ProductCard.jsx      # Tarjeta individual de producto (reutilizable)
│   │   ├── Colors.jsx           # Paleta de colores
│   │   ├── About.jsx            # Sobre nosotras
│   │   ├── FAQ.jsx              # Acordeón de preguntas
│   │   ├── Instagram.jsx        # Grid de fotos
│   │   ├── Contact.jsx          # Contacto + CTA WhatsApp
│   │   ├── Footer.jsx           # Pie de página
│   │   └── WhatsAppFloat.jsx    # Botón flotante
│   ├── data/                    # Datos separados de la UI
│   │   ├── products.js          # Productos del catálogo + helper de WhatsApp
│   │   ├── colors.js            # Paleta de colores disponibles
│   │   └── faqs.js              # Preguntas frecuentes
│   ├── styles/
│   │   └── global.css           # Todos los estilos (variables CSS + clases)
│   ├── App.jsx                  # Composición de las secciones
│   └── main.jsx                 # Punto de entrada de React
├── index.html                   # HTML base que monta la app
├── vite.config.js               # Configuración de Vite
├── package.json                 # Dependencias y scripts
└── .gitignore
```

### Filosofía de la organización

1. **Separación de datos y vista**: los productos, colores y FAQs viven en `/src/data`. Esto permite editarlos sin tocar componentes — y mañana, cuando conectes un backend o un CMS, solo cambias esos archivos.
2. **Un componente por archivo**: cada sección está aislada. Si rompes una, las demás siguen funcionando.
3. **Componentes reutilizables**: `ProductCard` es un solo archivo que se renderiza 6 veces con datos distintos. Es el principio **DRY** (Don't Repeat Yourself) en práctica.

---

## 🚀 Instalación local

### Requisitos previos

- **Node.js 18+** ([descargar](https://nodejs.org))
- **npm** (viene con Node) o **pnpm** / **yarn** si prefieres

### Pasos

```bash
# 1. Clona el repositorio
git clone https://github.com/TU-USUARIO/beegold.git
cd beegold

# 2. Instala dependencias
npm install

# 3. Levanta el servidor de desarrollo
npm run dev
```

Abre <http://localhost:5173> en tu navegador. Los cambios que hagas en el código se reflejan al instante (Hot Module Replacement).

---

## 📜 Scripts disponibles

| Comando | Qué hace |
|---------|----------|
| `npm run dev` | Levanta el servidor de desarrollo en modo "watch". |
| `npm run build` | Genera el build de producción optimizado en `/dist`. |
| `npm run preview` | Sirve localmente el build de producción para probarlo antes de subir. |
| `npm run deploy` | Hace build y publica `/dist` en la rama `gh-pages` (requiere haber configurado el remote). |

---

## ✏️ Cómo modificar contenido

### Agregar un producto nuevo

Edita `src/data/products.js` y añade un objeto al array. El `Catalog` lo renderizará automáticamente:

```js
{
  id: 'set-verde',                            // único, sin espacios
  name: 'Set Acanalado Verde',
  description: 'Top y leggins en verde militar.',
  price: 130000,
  image: '/images/set-verde.jpg',             // imagen en /public/images/
  badge: 'Nuevo',                             // o null
  colorDots: [{ hex: '#4a6b3a', label: 'Verde' }],
  waMessage: 'Hola! Quiero el Set Verde 💚 $130.000',
}
```

No olvides poner la imagen `set-verde.jpg` en `public/images/`.

### Cambiar el número de WhatsApp

Edita `src/data/products.js`, primera línea:

```js
export const WHATSAPP_NUMBER = '573118525167' // <- aquí
```

### Cambiar la paleta de colores del sitio

Edita `src/styles/global.css`, sección `:root` al inicio. Por ejemplo, para cambiar el dorado:

```css
:root {
  --gold: #c8962a;          /* <- cambia este hex */
  --gold-light: #e4b84a;
  /* ... */
}
```

### Modificar las FAQs

Edita `src/data/faqs.js`. Cada item tiene `id`, `question` y `answer`.

---

## 🌐 Deploy

### Opción A — GitHub Pages (gratis, lo que pediste)

1. **Crea el repo en GitHub** y haz push de tu código:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/TU-USUARIO/beegold.git
   git push -u origin main
   ```

2. **Edita `vite.config.js`** y cambia `base` por el nombre de tu repo:
   ```js
   base: '/beegold/',  // suponiendo que el repo se llama 'beegold'
   ```

3. **Haz deploy**:
   ```bash
   npm run deploy
   ```

4. En GitHub, ve a `Settings → Pages` y verifica que la fuente sea la rama `gh-pages`.

5. Tu sitio estará en `https://TU-USUARIO.github.io/beegold/` en uno o dos minutos.

### Opción B — Vercel (recomendado, también gratis)

1. Sube el código a GitHub (igual que arriba).
2. Entra a [vercel.com](https://vercel.com), conecta tu cuenta de GitHub.
3. "Import Project" → elige el repo → Deploy.
4. Vercel detecta Vite automáticamente. En menos de 1 minuto tienes una URL `*.vercel.app`.
5. Cada `git push` redespliega automáticamente.

> **Tip**: Para Vercel y Netlify deja `base: './'` en `vite.config.js`. La opción `/beegold/` es solo para GitHub Pages.

### Opción C — Netlify

Similar a Vercel: conecta GitHub, elige el repo, deploy. El comando de build es `npm run build` y el directorio publish es `dist`.

---

## 🔮 Posibles mejoras futuras

Ideas que puedes implementar para enriquecer tu portafolio:

- [ ] **Migrar a TypeScript** para validación de tipos (especialmente útil viniendo de Java).
- [ ] **Carrito de compras** con `useReducer` o Zustand.
- [ ] **Modal de detalle** al hacer click en un producto (con `<dialog>` nativo o React Portal).
- [ ] **Filtros por color** en el catálogo.
- [ ] **Lazy loading de imágenes** con `<img loading="lazy" />` (ya soportado por todos los navegadores).
- [ ] **SEO mejorado** con `react-helmet-async` o migrar a Next.js para SSR.
- [ ] **Tests** con Vitest + Testing Library.
- [ ] **CI/CD** con GitHub Actions para deploy automático en cada push a `main`.
- [ ] **Integración con un CMS** (Sanity, Strapi, o Contentful) para que la dueña pueda editar productos sin tocar código.
- [ ] **Pasarela de pagos** real (Wompi, Mercado Pago) en lugar de redirigir a WhatsApp.

---

## 📄 Licencia

MIT — siéntete libre de usar este proyecto como referencia o base.

---

**Hecho con 🐝 en Colombia**
