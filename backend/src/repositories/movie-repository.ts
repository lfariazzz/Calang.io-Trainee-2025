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