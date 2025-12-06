import { useEffect, useState } from "react";
import { FilterSection } from "../../Components/FilterSection/FilterSection";
import { Card } from "../../Components/Card";
import { movieService } from "../../services/movieService";
import type { Movie } from "../../Types/Movie";
import "../../styles/catalogo.css";

export function Catalogo() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadMovies();
  }, []);

  async function loadMovies(filters?: {
    nome?: string;
    categorias?: string[];
    ano?: string;
  }) {
    try {
      setLoading(true);
      
      let data: Movie[];
      if (filters && Object.keys(filters).length > 0) {
        data = await movieService.search(filters);
      } else {
        data = await movieService.getAll();
      }
      
      setMovies(data);
    } catch (error) {
      console.error("Erro ao carregar filmes:", error);
    } finally {
      setLoading(false);
    }
  }

  const handleFilter = (filters: {
    nome?: string;
    categorias?: string[];
    ano?: string;
  }) => {
    loadMovies(filters);
  };

  return (
    <main>
      <FilterSection onFilter={handleFilter} />

      <section id="cards">
        <h2>Catálogo de Filmes</h2>

        {loading ? (
          <div className="loading">Carregando filmes...</div>
        ) : movies.length === 0 ? (
          <div className="no-movies">Nenhum filme encontrado.</div>
        ) : (
          <div className="cards-grid">
            {movies.map((movie) => (
              <Card
                key={movie.id}
                rating={movie.rating?.toString() || "N/A"}
                image={movie.imagem}
                title={movie.nome}
                year={`${movie.ano} • ${movie.categorias?.join(" / ")}`}
              />
            ))}
          </div>
        )}
      </section>
    </main>
  );
}