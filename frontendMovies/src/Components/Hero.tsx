import { Link } from "react-router";
import "./../styles/forgeflix.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg"></div>

      <div className="hero-content">
        <h1>FORJANDO SUA EXPERIÊNCIA CINEMATOGRÁFICA</h1>
        <p>Descubra milhares de filmes em uma plataforma feita para cinéfilos</p>

        <div className="hero-buttons">
          <Link to="/catalogo" className="primary">EXPLORAR CATÁLOGO</Link>
          <button className="secondary">COMO FUNCIONA</button>
        </div>
      </div>
    </section>
  );
}
