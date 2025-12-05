import { Link } from "react-router";
import "./../styles/forgeflix.css";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="logo">🔥 FORGEFLIX</div>

      <nav>
        <Link to="/">Início</Link>
        <Link to="/catalogo">Catálogo</Link>
        <Link to="/colecao">Minha Coleção</Link>
        <Link to="/sobre">Sobre</Link>
      </nav>

      <div className="actions">
        <button className="search">🔍</button>
        <button className="theme">🌙</button>
        <button className="profile">👤</button>
      </div>
    </header>
  );
}
