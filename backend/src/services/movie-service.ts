import { findAllMovies } from "../repositories/movie-repository"

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