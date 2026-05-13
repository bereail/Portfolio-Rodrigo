const services = [
  {
    title: "Books personales",
    text: "Sesiones pensadas para mostrar identidad, estilo y personalidad en retratos urbanos.",
  },
  {
    title: "Contenido para marcas",
    text: "Fotografía visual para emprendimientos, indumentaria, redes sociales y campañas digitales.",
  },
  {
    title: "Retrato lifestyle",
    text: "Imágenes naturales, espontáneas y estéticas para uso personal, profesional o artístico.",
  },
];

export default function Services() {
  return (
    <section id="servicios" className="services">
      <div className="container">
        <span className="section-tag">Servicios</span>

        <div className="section-heading">
          <h2>Sesiones y contenido visual</h2>

          <p>
            Fotografía urbana y lifestyle para personas, marcas y proyectos
            que buscan una imagen auténtica y profesional.
          </p>
        </div>

        <div className="services__grid">
          {services.map((service, index) => (
            <article className="service-card" key={index}>
              <span>0{index + 1}</span>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}