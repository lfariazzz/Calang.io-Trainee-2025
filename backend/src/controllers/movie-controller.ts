import { Request, Response } from "express";
import { getMoviesService, getMoviesByIdService, searchMoviesService, createMovieService, deleteMoviesService } from "../services/movie-service" 

export const getMovies = async(req: Request, res: Response) =>{
    const  httpResponse = await getMoviesService()

    res.status(httpResponse.statusCode).json(httpResponse.body);
}

export const getMoviesById = async(req: Request, res: Response) =>{
    const id = parseInt(req.params.id)
    const httpResponse = await getMoviesByIdService(id)

    res.status(httpResponse.statusCode).json(httpResponse.body);
}

export const searchMovies = async(req: Request, res: Response) =>{
    const { nome, categoria, ano } = req.query;

    const filters = {
      nome: nome as string,
      categoria: categoria as string,
      ano: ano as string,
    };

    const httpResponse = await searchMoviesService(filters);
    res.status(httpResponse.statusCode).json(httpResponse.body);
}

export const postMovie = async(req: Request, res: Response) =>{
    const bodyValue = req.body
    const httpResponse = await createMovieService(bodyValue);

    res.status(httpResponse.statusCode).json(httpResponse.body)

}

export const deleteMovie = async(req: Request, res: Response) =>{
    const id = parseInt(req.params.id)
    const httpResponse = await deleteMoviesService(id)

    res.status(httpResponse.statusCode).json(httpResponse.body);
}

export const patchMovie = async(req: Request, res: Response) =>{
    
}

