import { Router } from "express";
import { getMovies, getMoviesById, searchMovies, postMovie } from "./controllers/movie-controller"
const router = Router();

router.get("/movies/search", searchMovies);
router.get("/movies", getMovies);
router.get("/movies/:id", getMoviesById);
router.post("/movies", postMovie);

export default router;