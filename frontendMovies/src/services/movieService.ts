// services/movieService.ts
import axios from 'axios';
import type { Movie } from '../Types/Movie';

const API_URL = 'http://localhost:3333/api/movies'; // Note o /movies

export const movieService = {
  getAll: async (): Promise<Movie[]> => {
    const response = await axios.get(`${API_URL}/search`); // URL completa: http://localhost:3333/api/movies/search
    return response.data;
  },

  search: async (filters: {
    nome?: string;
    categorias?: string[];
    ano?: string;
  }): Promise<Movie[]> => {
    // Construir a query string
    const params = new URLSearchParams();
    
    if (filters.nome) params.append('nome', filters.nome);
    if (filters.ano) params.append('ano', filters.ano);
    
    // Adicionar categorias como parâmetros múltiplos
    if (filters.categorias && filters.categorias.length > 0) {
      filters.categorias.forEach(categoria => {
        params.append('categorias', categoria);
      });
    }
    
    const queryString = params.toString();
    const url = `${API_URL}/search${queryString ? '?' + queryString : ''}`;
    
    console.log('URL da busca completa:', url); // Deve mostrar: http://localhost:3333/api/movies/search?categorias=A%C3%A7%C3%A3o
    
    const response = await axios.get(url);
    return response.data;
  },

  // Se você tiver outros métodos, mantém-os aqui
  // getById, create, update, delete, etc.
};