import { movie } from "../models/movie-model"
import { db, loadDB, saveDB } from "../database/db"


export const findAllMovies = async(): Promise<movie[]> =>{
    await loadDB()
    return db.data!.movies;
}

export const findMovieById = async(id: number): Promise<movie | undefined> =>{
    await loadDB();

    return db.data!.movies.find( movie => movie.id == id );
}

export const insertMovie = async(movie: movie) => {
    await loadDB();
    db.data!.movies.push(movie);
    await saveDB();
}

export const deleteMovieById = async(id: number): Promise<boolean> => {
    await loadDB();
    let data = db.data!.movies;
    const index = data.findIndex((movie) => movie.id == id)
    if(index !==-1){
        data.splice(index, 1);
        await saveDB();
        return true
    }
    return false
}

export const findAndUpdateMovie = async(id: number, movieNew: movie) => {
    await loadDB();
    let data = db.data!.movies;
    const index = data.findIndex((movie) => movie.id === id);

    if (index === -1) return null;

    data[index] = {
        ...data[index],
        ...movieNew
    };
    await saveDB();
    return data[index];
}