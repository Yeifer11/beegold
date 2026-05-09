// Vite cambia BASE_URL segun donde se publique la app.
// En local es "/" y en GitHub Pages sera "/beegold/".
export const imagePath = (fileName) => {
  return `${import.meta.env.BASE_URL}images/${fileName}`
}
