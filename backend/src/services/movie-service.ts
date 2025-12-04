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

export const searchMoviesService = async(filters: {
        nome?: string;
        categoria?: string;
        ano?: string;
    }) => {
    const { nome, categoria, ano } = filters;

    let results = await findAllMovies();

    if (nome) {
        const lower = nome.toLowerCase();
        results = results.filter(movie => movie.nome.toLowerCase().includes(lower)
    );
  }

    if (categoria) {
        const lower = categoria.toLowerCase();
        results = results.filter(movie => movie.categorias.some(c => c.toLowerCase() === lower)
    );
  }

    if (ano) {
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