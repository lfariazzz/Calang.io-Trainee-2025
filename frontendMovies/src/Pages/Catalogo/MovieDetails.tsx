import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import { movieService } from "../../services/movieService";
import type { Movie } from "../../Types/Movie";
import "../../styles/moviedetails.css";

export function MovieDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [movie, setMovie] = useState<Movie | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadMovieDetails();
  }, [id]);

  async function loadMovieDetails() {
    if (!id) return;

    try {
      setLoading(true);
      const movieId = parseInt(id);
      const data = await movieService.getById(movieId);
      setMovie(data);
    } catch (error) {
      console.error("Erro ao carregar detalhes do filme:", error);
      navigate("/catalogo"); 
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return <div className="loading">Carregando detalhes do filme...</div>;
  }

  if (!movie) {
    return <div className="no-movie">Filme não encontrado.</div>;
  }

  const handleWatchNow = () => {
    console.log("Assistir agora:", movie.id);
  };

  const handleAddToCollection = () => {
    console.log("Adicionar à coleção:", movie.id);

  };

  return (
    <section className="movie-detail">
      <button 
        className="back-button" 
        onClick={() => navigate(-1)}
        aria-label="Voltar"
      >
        <i className="fas fa-arrow-left"></i> Voltar
      </button>

      <div className="movie-container">
        {/* CARD GRANDE DO FILME (ESQUERDA) */}
        <div className="movie-poster-card">
          <img 
            src={movie.imagem} 
            alt={movie.nome} 
            className="movie-poster" 
          />
          <div className="movie-badge">
            <span className="movie-year">{movie.ano}</span>
            <span className="movie-genre">
              {movie.categorias?.join(" / ")}
            </span>
          </div>
        </div>

        {/* INFORMAÇÕES (DIREITA) */}
        <div className="movie-info">
          <h1 className="movie-title">{movie.nome}</h1>
          
          <div className="movie-actions">
            <button 
              className="watch-now" 
              onClick={handleWatchNow}
              aria-label="Assistir agora"
            >
              <i className="fas fa-play"></i> ASSISTIR AGORA
            </button>
            <button 
              className="add-to-collection" 
              onClick={handleAddToCollection}
              aria-label="Adicionar à coleção"
            >
              <i className="fas fa-plus"></i> ADICIONAR À COLEÇÃO
            </button>
          </div>

          <p className="movie-synopsis">
            {movie.sinopse || "Sinopse não disponível."}
          </p>

          <div className="movie-meta">
            <div className="meta-item">
              <strong>Diretor:</strong>
              <span>{movie.diretor || "Não informado"}</span>
            </div>
            <div className="meta-item">
              <strong>Elenco:</strong>
              <span>{movie.elenco || "Não informado"}</span>
            </div>
            <div className="meta-item">
              <strong>Duração:</strong>
              <span>{movie.duracao || "Não informado"}</span>
            </div>
          </div>

          <div className="movie-rating">
            <div className="stars">
              {Array.from({ length: 5 }).map((_, index) => (
                <i 
                  key={index} 
                  className={
                    index < Math.floor(Number(movie.rating) || 0 / 2)
                      ? "fas fa-star"
                      : "far fa-star"
                  }
                />
              ))}
            </div>
            <span className="rating-value">
              {movie.rating ? `${movie.rating}/10` : "Sem avaliação"}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}