import { movie } from "../models/movie-model"


const database : movie[]=[
    {
        id: 1,
        nome: "Interestelar",
        categorias: ["ficcao","romance"],
        ano: "2007"
    },
    {
        id: 2,
        nome: "Interest",
        categorias: ["ficcao","romance"],
        ano: "2007"
    },
    {
        id: 3,
        nome: "interestelar",
        categorias: ["ficcao","romance"],
        ano: "2008"
    }
]
export const findAllMovies = async(): Promise<movie[]> =>{
    return database;
}

export const findMovieById = async(id: number): Promise<movie | undefined> =>{
    return database.find( movie => movie.id == id )
}

export const insertMovie = async(movie: movie) => {
    database.push(movie)
}

export const deleteMovieById = async(id: number): Promise<boolean> => {
    const index = database.findIndex((movie) => movie.id == id)
    if(index !==-1){
        database.splice(index, 1)
        return true
    }
    return false
}

export const findAndUpdateMovie = async(id: number, movieNew: movie) => {
    const index = database.findIndex((movie) => movie.id === id);

    if (index === -1) return null;

    database[index] = {
        ...database[index],
        ...movieNew
    };

    return database[index];
}