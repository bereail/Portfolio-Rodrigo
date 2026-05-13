import { useState } from "react";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";


import img175 from "../assets/fotos/img175.jpg";
import img182 from "../assets/fotos/img182.jpg";
import img189 from "../assets/fotos/img189.jpg";
import img196 from "../assets/fotos/img196.jpg";
import img203 from "../assets/fotos/img203.jpg";
import img210 from "../assets/fotos/img210.jpg";
import img217 from "../assets/fotos/img217.jpg";
import img224 from "../assets/fotos/img224.jpg";
import img231 from "../assets/fotos/img231.jpg";
import img238 from "../assets/fotos/img238.jpg";
import img245 from "../assets/fotos/img245.jpg";
import img252 from "../assets/fotos/img252.jpg";
import img259 from "../assets/fotos/img259.jpg";
import img266 from "../assets/fotos/img266.jpg";
import img273 from "../assets/fotos/img273.jpg";
import img280 from "../assets/fotos/img280.jpg";

const photos = [
  {
    src: img175,
    title: "Streetwear",
    category: "Fashion",
  },
  {
    src: img182,
    title: "Lifestyle",
    category: "Lifestyle",
  },
  {
    src: img189,
    title: "Editorial",
    category: "Portrait",
  },
  {
    src: img196,
    title: "Book urbano",
    category: "Book",
  },
  {
    src: img203,
    title: "Moda urbana",
    category: "Fashion",
  },
  {
    src: img210,
    title: "Retrato casual",
    category: "Portrait",
  },
  {
    src: img217,
    title: "Street portrait",
    category: "Lifestyle",
  },
  {
    src: img224,
    title: "Outdoor session",
    category: "Portrait",
  },
  {
    src: img231,
    title: "Urban vibes",
    category: "Lifestyle",
  },
  {
    src: img238,
    title: "Marca personal",
    category: "Branding",
  },
  {
    src: img245,
    title: "Contenido visual",
    category: "Branding",
  },
  {
    src: img252,
    title: "Sesión urbana",
    category: "Portrait",
  },
  {
    src: img259,
    title: "Street look",
    category: "Fashion",
  },
  {
    src: img266,
    title: "Editorial fashion",
    category: "Fashion",
  },
  {
    src: img273,
    title: "Lifestyle portrait",
    category: "Lifestyle",
  },
  {
    src: img280,
    title: "Retrato minimal",
    category: "Portrait",
  },
];

export default function Gallery() {

  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  return (
    <>
      <section id="portfolio" className="gallery">

        <div className="container">

          <span className="section-tag">
            Portfolio
          </span>

          <div className="section-heading">

            <div>
              <h2>Trabajos destacados</h2>
            </div>

            <p>
              Una selección de retratos, sesiones urbanas
              y contenido visual pensado para marcas,
              artistas y redes sociales.
            </p>

          </div>

          <div className="gallery__grid">

            {photos.map((photo, i) => (

              <article
                className="gallery__item"
                key={i}
                onClick={() => {
                  setIndex(i);
                  setOpen(true);
                }}
              >

                <img
                  src={photo.src}
                  alt={photo.title}
                />

                <div className="gallery__overlay">

                  <span>
                    {photo.category}
                  </span>

                  <h3>
                    {photo.title}
                  </h3>

                </div>

              </article>

            ))}

          </div>

        </div>

      </section>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={photos}
      />
    </>
  );
}