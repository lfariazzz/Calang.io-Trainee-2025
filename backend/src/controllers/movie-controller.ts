import { Request, Response } from "express";
import { getMoviesService, getMoviesByIdService } from "../services/movie-service" 

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
    
}

export const postMovie = async(req: Request, res: Response) =>{
    
}

export const deleteMovie = async(req: Request, res: Response) =>{
    
}

export const patchMovie = async(req: Request, res: Response) =>{
    
}

