function About() {
  // Estos numeros se pintan abajo del texto. Estan en arreglo para poder editarlos rapido.
  const stats = [
    { number: '5+', label: 'Colores' },
    { number: '100%', label: 'Calidad' },
    { number: '24h', label: 'Envíos' },
  ]

  return (
    <section id="sobre">
      <div className="sobre-img">
        <img src="/images/set-azul-marino.jpg" alt="BeeGold modelo" />
      </div>

      <div className="sobre-content">
        <p className="sobre-tag">Nuestra historia</p>
        <h2 className="sobre-title">
          Ropa hecha para
          <br />
          mujeres que <em>entrenan</em>
        </h2>
        <p className="sobre-text">
          BeeGold nació de la pasión por el deporte y el estilo femenino.
          Creemos que una mujer que entrena duro merece ropa que la acompañe:
          que moldee, que dure y que se vea increíble.
        </p>
        <p className="sobre-text">
          Cada set está diseñado con telas de alta compresión, costuras
          reforzadas y cortes que realzan la figura — porque tú te lo mereces.
        </p>

        <div className="stats">
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="stat-num">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
