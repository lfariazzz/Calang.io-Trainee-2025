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
        nome: "Interestelar",
        categorias: ["ficcao","romance"],
        ano: "2007"
    },
    {
        id: 3,
        nome: "Interestelar",
        categorias: ["ficcao","romance"],
        ano: "2007"
    }
]
export const findAllMovies = async(): Promise<movie[]> =>{
    return database;
}

export const findMovieById = async(id: number): Promise<movie | undefined> =>{
    return database.find( movie => movie.id == id )
}