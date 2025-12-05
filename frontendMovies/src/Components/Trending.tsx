import "./../styles/forgeflix.css";
import imageCurve from "./../assets/images/curve.svg";
import {Card} from "./Card"

import image1 from "./../assets/images/card1.png";
import image2 from "./../assets/images/card2.png";
import image3 from "./../assets/images/card3.png";
import image4 from "./../assets/images/card4.png";

export default function Trending() {
  const imageCurveUrl = imageCurve;
  return (
    <section className="trending">
      <h2>🔥 EM ALTA NA FORJA</h2>

      <img src={imageCurveUrl} className="trending-curve" />

      <div className="cards-container">
        <Card
            rating="8.8"
            image={image1}
            title="HOMEM ARANHA"
            year="2010 • AÇÃO / FICÇÃO CIENTÍFICA"
        />

        <Card
            rating="8.6"
            image={image2}
            title="CORINGA"
            year="2014 • FICÇÃO CIENTÍFICA / DRAMA"
        />

        <Card
            rating="8.0"
            image={image3}
            title="TRANSFORMERS"
            year="2017 • FICÇÃO CIENTÍFICA / AÇÃO"
        />

        <Card
            rating="7.8"
            image={image4}
            title="PÂNICO V"
            year="2017 • TERROR / SUSPENSE"
        />

      </div>
    </section>
  );
}
