import {
  MessageCircle,
  Camera,
} from "lucide-react";

export default function Contact() {
  return (
    <section id="contacto" className="contact">
      <div className="container">
        <div className="contact__box">
          <span className="section-tag">Contacto</span>

          <h2>¿Tenés una idea o proyecto?</h2>

          <p className="contact__text">
            Disponible para sesiones personales, fotografía urbana, contenido
            para marcas y proyectos visuales.
          </p>

          <div className="contact__actions">
            <a
              href="https://wa.me/5493412295450"
              target="_blank"
              rel="noreferrer"
              className="contact__button"
            >
              <MessageCircle size={20} />
              WhatsApp
            </a>

            <a
  href="https://www.instagram.com/callejeandounpoco_/"
  target="_blank"
  rel="noreferrer"
  className="contact__button"
>
  <span>📸</span>
  Instagram
</a>
          </div>

          <div className="contact__footer">
            <div className="contact__footer-item">
              <Camera size={18} />
              <span>Rodrigo Solohaga Photography</span>
            </div>

            <div className="contact__footer-item">
              Rosario, Santa Fe — Argentina
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}