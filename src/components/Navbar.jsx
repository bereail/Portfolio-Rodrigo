export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar__container">

        <a href="#inicio" className="navbar__logo">
          Rodrigo Solohaga
        </a>

        <nav className="navbar__links">
          <a href="#portfolio">Portfolio</a>          
          <a href="#servicios">Servicios</a>
          <a href="#sobre-mi">Sobre mí</a>
          <a href="#contacto">Contacto</a>
        </nav>

      </div>
    </header>
  );
}