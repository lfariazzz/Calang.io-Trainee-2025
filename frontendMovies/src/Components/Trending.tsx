import "./../styles/forgeflix.css";
import imageCurve from "./../assets/images/curve.svg";

export default function Trending() {
  const imageCurveUrl = imageCurve;
  return (
    <section className="trending">
      <h2>🔥 EM ALTA NA FORJA</h2>

      <img src={imageCurveUrl} className="trending-curve" />

      <div className="cards-container">

        <div className="card">
          <span className="rating">⭐ 8.8</span>
          <img src="/src/images/card1.png" alt="HOMEM ARANHA" />
          <h3 className="title">HOMEM ARANHA</h3>
          <p className="meta">2010 • AÇÃO / FICÇÃO CIENTÍFICA</p>
        </div>

        <div className="card">
          <span className="rating">⭐ 8.6</span>
          <img src="/src/images/card2.png" alt="CORINGA" />
          <h3 className="title">CORINGA</h3>
          <p className="meta">2014 • FICÇÃO CIENTÍFICA / DRAMA</p>
        </div>

        <div className="card">
          <span className="rating">⭐ 8.0</span>
          <img src="/src/images/card3.png" alt="TRANSFORMERS" />
          <h3 className="title">TRANSFORMERS</h3>
          <p className="meta">2017 • FICÇÃO CIENTÍFICA / AÇÃO</p>
        </div>

        <div className="card">
          <span className="rating">⭐ 7.8</span>
          <img src="/src/images/card4.png" alt="PÂNICO V" />
          <h3 className="title">PÂNICO V</h3>
          <p className="meta">2017 • TERROR / SUSPENSE</p>
        </div>

      </div>
    </section>
  );
}
