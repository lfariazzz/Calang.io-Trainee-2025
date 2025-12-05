import { FilterSection } from "../../Components/FilterSection/FilterSection";
import { Card } from "../../Components/Card";
import "../../styles/catalogo.css";

export function Catalogo() {
  return (
    <>


      <main>
        <FilterSection />

        <section id="cards">
          <h2>Catálogo de Filmes</h2>

          {/* Aqui depois você lista com dados da API */}
          <div className="cards-grid">
            <Card
              rating="8.8"
              image="/images/card1.png"
              title="HOMEM ARANHA"
              year="2010 • AÇÃO / FICÇÃO CIENTÍFICA"
            />

            <Card
              rating="8.6"
              image="/images/card2.png"
              title="CORINGA"
              year="2014 • FICÇÃO CIENTÍFICA / DRAMA"
            />
            <Card
              rating="8.8"
              image="/images/card1.png"
              title="HOMEM ARANHA"
              year="2010 • AÇÃO / FICÇÃO CIENTÍFICA"
            />

            <Card
              rating="8.6"
              image="/images/card2.png"
              title="CORINGA"
              year="2014 • FICÇÃO CIENTÍFICA / DRAMA"
            />
            <Card
              rating="8.8"
              image="/images/card1.png"
              title="HOMEM ARANHA"
              year="2010 • AÇÃO / FICÇÃO CIENTÍFICA"
            />

            <Card
              rating="8.6"
              image="/images/card2.png"
              title="CORINGA"
              year="2014 • FICÇÃO CIENTÍFICA / DRAMA"
            />                        
          </div>
        </section>
      </main>
    </>
  );
}
