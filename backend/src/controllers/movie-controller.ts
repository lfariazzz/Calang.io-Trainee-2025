import { Request, Response } from "express";
import { getMoviesService, getMoviesByIdService, searchMoviesService, createMovieService, deleteMoviesService, updateMovieService } from "../services/movie-service" 

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
    const { nome, categoria, categorias, ano } = req.query;
    
    let categoriasArray: string[] = [];
    
    // Tratamento das categorias (mantém o mesmo)
    if (typeof categorias === 'string') {
        categoriasArray = categorias.split(',').map(c => c.trim()).filter(c => c);
    }
    else if (Array.isArray(categorias)) {
        categoriasArray = categorias.map(c => c.toString().trim());
    }
    else if (categoria) {
        if (Array.isArray(categoria)) {
            categoriasArray = categoria.map(c => c.toString().trim());
        } else {
            categoriasArray = [categoria.toString().trim()];
        }
    }

    // Tratamento especial para o ano
    let anoNumber: number | undefined = undefined;
    
    if (ano) {
        const anoString = ano.toString();
        const parsedAno = parseInt(anoString, 10);
        
        if (!isNaN(parsedAno)) {
            anoNumber = parsedAno;
        } else {
            // Se não for um número válido, pode retornar erro ou ignorar
            console.warn(`Ano inválido recebido: ${anoString}`);
        }
    }

    const filters = {
        nome: nome ? nome.toString() : undefined,
        categorias: categoriasArray,
        ano: anoNumber, // Agora é number ou undefined
    };

    console.log('Filtros finais:', filters);
    
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
    const id = parseInt(req.params.id)
    const bodyValue = req.body

    const httpResponse = await updateMovieService(id, bodyValue)
    res.status(httpResponse.statusCode).json(httpResponse.body);
}

