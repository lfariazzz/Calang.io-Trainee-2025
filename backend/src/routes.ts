import { Router } from "express";
import { getMovies, getMoviesById, searchMovies } from "./controllers/movie-controller"
const router = Router();

router.get("/movies/search", searchMovies);
router.get("/movies", getMovies);
router.get("/movies/:id", getMoviesById);

export default router;