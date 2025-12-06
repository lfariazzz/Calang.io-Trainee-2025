// Types/Movie.ts
export interface Movie {
  id: number | string;
  nome: string;
  ano: number;
  categorias?: string[];
  rating?: number;
  imagem: string;
  sinopse?: string;
  duracao?: number;
}