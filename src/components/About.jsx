import img165 from "../assets/fotos/img165.jpg";

export default function About() {
  return (
    <section id="sobre-mi" className="about">

      <div className="container about__container">

        <div className="about__image">

          <img
            src={img165}
            alt="Rodrigo Solohaga"
          />

        </div>

        <div className="about__content">

          <span className="section-tag">
            Sobre mí
          </span>

          <h2>
            La fotografía como forma de contar
          </h2>

          <p>
            Soy Rodrigo Hernán Solohaga y hace más de
            8 años encontré en la fotografía una manera
            de capturar personalidad, miradas y momentos reales.
          </p>

          <p>
            Me especializo en fotografía urbana,
            retratos y contenido lifestyle para
            marcas, artistas y redes sociales.
          </p>

          <p>
            Cada sesión busca transmitir identidad,
            estética y autenticidad.
          </p>

        </div>

      </div>

    </section>
  );
}