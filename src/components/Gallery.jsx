import { useState } from "react";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import carLifestyle01 from "../assets/fotos/car_lifestyle_01.webp";
import coffeeGirl01 from "../assets/fotos/coffee_girl_01.webp";
import fitness01 from "../assets/fotos/fitness_01.webp";
import fitness02 from "../assets/fotos/fitness_02.webp";
import fitness025555 from "../assets/fotos/fitness_025555.webp";
import hoodieBack01 from "../assets/fotos/hoodie_back_01.webp";
import indoorFashion01 from "../assets/fotos/indoor_fashion_01.webp";
import kayakLifestyle01 from "../assets/fotos/kayak_lifestyle_01.webp";
import lifestyleMan01 from "../assets/fotos/lifestyle_man_01.webp";
import portraitMan01 from "../assets/fotos/portrait_man_01.webp";

import sportModel02 from "../assets/fotos/sport_model_02.webp";
import sportModel03 from "../assets/fotos/sport_model_03.webp";
import sportWalk01 from "../assets/fotos/sport_walk_01.webp";
import sportWall01 from "../assets/fotos/sport_wall_01.webp";
import stairsModel01 from "../assets/fotos/stairs_model_01.webp";
import streetwearCouple01 from "../assets/fotos/streetwear_couple_01.webp";
import streetwearModel01 from "../assets/fotos/streetwear_model_01.webp";
import winterMan01 from "../assets/fotos/winter_man_01.webp";

const photos = [
  { src: fitness01, title: "Training urbano", category: "Sport" },
  { src: fitness02, title: "Preparación deportiva", category: "Sport" },
  { src: fitness025555, title: "Fitness lifestyle", category: "Lifestyle" },
  { src: sportModel02, title: "Streetwear deportivo", category: "Fashion" },
  { src: sportModel03, title: "Lifestyle fitness", category: "Lifestyle" },
  { src: sportWalk01, title: "Sesión urbana", category: "Sport" },
  { src: sportWall01, title: "Sport wall", category: "Sport" },
  { src: stairsModel01, title: "Outdoor session", category: "Lifestyle" },
  { src: streetwearModel01, title: "Streetwear editorial", category: "Fashion" },
  { src: streetwearCouple01, title: "Streetwear couple", category: "Lifestyle" },
  { src: hoodieBack01, title: "Producto urbano", category: "Branding" },
  { src: indoorFashion01, title: "Indoor fashion", category: "Fashion" },
  { src: coffeeGirl01, title: "Café urbano", category: "Lifestyle" },
  { src: carLifestyle01, title: "Car lifestyle", category: "Lifestyle" },
  { src: kayakLifestyle01, title: "Kayak lifestyle", category: "Branding" },
  { src: lifestyleMan01, title: "Marca personal", category: "Branding" },
  { src: portraitMan01, title: "Retrato masculino", category: "Portrait" },
  { src: winterMan01, title: "Winter portrait", category: "Portrait" },
];

export default function Gallery() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  return (
    <>
      <section id="portfolio" className="gallery">
        <div className="container">
          <span className="section-tag">Portfolio</span>

          <div className="section-heading">
            <div>
              <h2>Trabajos destacados</h2>
            </div>

            <p>
              Una selección de retratos, sesiones urbanas y contenido visual
              pensado para marcas, artistas y redes sociales.
            </p>
          </div>

          <div className="gallery__grid">
            {photos.map((photo, i) => (
              <article
                className="gallery__item"
                key={`${photo.title}-${i}`}
                onClick={() => {
                  setIndex(i);
                  setOpen(true);
                }}
              >
                <img src={photo.src} alt={photo.title} loading="lazy" />

                <div className="gallery__overlay">
                  <span>{photo.category}</span>
                  <h3>{photo.title}</h3>
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
        slides={photos.map((photo) => ({
          src: photo.src,
          alt: photo.title,
        }))}
      />
    </>
  );
}