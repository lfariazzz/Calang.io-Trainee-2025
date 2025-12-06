// src/components/Trending/Trending.tsx
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Card } from "./Card";
import { movieService } from "../services/movieService";
import type { Movie } from "../Types/Movie";
import "./../styles/forgeflix.css";
import imageCurve from "./../assets/images/curve.svg";

export default function Trending() {
  const navigate = useNavigate();
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  const imageCurveUrl = imageCurve;

  useEffect(() => {
    loadTopRatedMovies();
  }, []);

  async function loadTopRatedMovies() {
    try {
      setLoading(true);
      
      // Busca todos os filmes
      const allMovies = await movieService.getAll();
      
      // Filtra filmes com rating válido (> 0)
      const ratedMovies = allMovies.filter(movie => 
        movie.rating && movie.rating > 0
      );
      
      // Ordena por rating (decrescente) e pega os 4 primeiros
      const topMovies = ratedMovies
        .sort((a, b) => (b.rating || 0) - (a.rating || 0))
        .slice(0, 4);
      
      setMovies(topMovies);
    } catch (error) {
      console.error("Erro ao carregar filmes em alta:", error);
      setMovies([]);
    } finally {
      setLoading(false);
    }
  }

  const handleCardClick = (movieId: number) => {
    navigate(`/movie/${movieId}`);
  };

  return (
    <section className="trending">
      <h2>🔥 EM ALTA NA FORJA</h2>

      {/* A curva fica no fundo */}
      <img src={imageCurveUrl} className="trending-curve" alt="Curva decorativa" />

      {/* Container dos cards com z-index acima da curva */}
      <div className="movie-cards">
        <div className="cards-container">
          {loading ? (
            <div className="loading">Carregando filmes em alta...</div>
          ) : (
            movies.map((movie) => (
              <Card
                key={movie.id}
                rating={movie.rating?.toString() || "N/A"}
                image={movie.imagem}
                title={movie.nome}
                year={`${movie.ano} • ${movie.categorias?.join(" / ")}`}
                onClick={() => handleCardClick(movie.id)}
              />
            ))
          )}
        </div>
      </div>
    </section>
  );
}