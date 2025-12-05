import "./../styles/forgeflix.css";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="logo">🔥 FORGEFLIX</div>

      <nav>
        <a href="#">Início</a>
        <a href="/catalogo">Catálogo</a>
        <a href="#">Minha Coleção</a>
        <a href="#">Sobre</a>
      </nav>

      <div className="actions">
        <button className="search">🔍</button>
        <button className="theme">🌙</button>
        <button className="profile">👤</button>
      </div>
    </header>
  );
}
