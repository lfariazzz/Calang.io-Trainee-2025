// Types/Movie.ts
export interface Movie {
  id: number;
  nome: string;
  ano: number;
  categorias?: string[];
  rating?: number;
  imagem: string;
  sinopse?: string;
  duracao?: number;
  diretor?: string;
  elenco?: string; 
}