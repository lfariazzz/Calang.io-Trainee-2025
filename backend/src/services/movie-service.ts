import { movie } from "../models/movie-model"
import { findAllMovies, findMovieById, insertMovie, deleteMovieById, findAndUpdateMovie } from "../repositories/movie-repository"

export const getMoviesService = async() =>{
    const data = await findAllMovies()
    let response = null

    if(data){
        response = {
            statusCode: 200,
            body: data
        }
    }else{
        response = {
            statusCode: 202,
            body: null,
        }
    }
    return response
}

export const getMoviesByIdService = async(id: number) =>{
    const data = await findMovieById(id)
    let response = null

    if(data){
        response = {
            statusCode: 200,
            body: data
        }
    }else{
        response = {
            statusCode: 202,
            body: null,
        }
    }
    return response
}

// Adicione esta função helper para normalizar textos
const normalizeText = (text: string): string => {
    return text
        .toLowerCase()
        .normalize('NFD') // Decompõe acentos
        .replace(/[\u0300-\u036f]/g, '') // Remove acentos
        .trim();
};

export const searchMoviesService = async(filters: {
    nome?: string;
    categorias?: string[];
    ano?: number;
}) => {
    const { nome, categorias, ano } = filters;

    let results = await findAllMovies();

    // Filtro por nome
    if (nome && nome.trim() !== '') {
        const normalizedNome = normalizeText(nome);
        results = results.filter(movie => 
            normalizeText(movie.nome).includes(normalizedNome)
        );
    }

    // Filtro por categorias
    if (categorias && categorias.length > 0) {
        
        const validCategorias = categorias
            .map(c => c.trim())
            .filter(c => c !== '');
        
        if (validCategorias.length > 0) {
            const normalizedCategorias = validCategorias.map(c => normalizeText(c));
            
            results = results.filter(movie => {
                const movieCatsNormalized = movie.categorias.map(c => normalizeText(c));
                
                // Verifica se o filme tem TODAS as categorias buscadas
                const hasAll = normalizedCategorias.every(categoria => 
                    movieCatsNormalized.includes(categoria)
                );
                
                return hasAll;
            });
        }
    }

    // Filtro por ano
    if (ano !== undefined) {
        results = results.filter(movie => movie.ano === ano);
    }

    
    return {
        statusCode: 200,
        body: results
    };
};

export const createMovieService = async(movie: movie) =>{
    if(Object.keys(movie).length !== 0){
        await insertMovie(movie);
        return {statusCode:200,body:{msg:"Criado!"}};
    }else{
        return {statusCode:400,body:{msg:"badrequest"}};
    }
}

export const deleteMoviesService = async(id: number) =>{
    const isDelete = await deleteMovieById(id)
    let response = null

    if(isDelete){
        response = {
            statusCode: 200,
            body: {msg:"Deleted"}
        }
    }else{
        response = {
            statusCode: 400,
            body: null,
        }
    }
    return response
}

export const updateMovieService = async(id: number, movieNew: movie) =>{
    const data = await findAndUpdateMovie(id, movieNew)

    return {
        statusCode: 200,
        body: data
    }
}