import { motion } from "framer-motion";

import heroImage from "../assets/fotos/streetwear_couple_01.webp";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="hero"
      style={{
        backgroundImage: `
          linear-gradient(
            rgba(0,0,0,0.45),
            rgba(0,0,0,0.72)
          ),
          url(${heroImage})
        `
      }}
    >

      <motion.div
        className="hero__content"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          ease: "easeOut"
        }}
      >

        <motion.span
          className="hero__tag"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: .4 }}
        >
          Fotografía urbana · retrato · lifestyle
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: .2,
            duration: 1
          }}
        >
          Rodrigo <br />
          Solohaga
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: .6 }}
        >
          Capturando estilo, identidad y momentos reales
          a través de la fotografía.
        </motion.p>

        <motion.div
          className="hero__actions"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: .8 }}
        >

          <a
            href="#portfolio"
            className="btn btn--primary"
          >
            Ver portfolio
          </a>

          <a
            href="https://wa.me/5493412295450"
            target="_blank"
            rel="noreferrer"
            className="btn btn--secondary"
          >
            Contactar
          </a>

        </motion.div>

      </motion.div>

    </section>
  );
}