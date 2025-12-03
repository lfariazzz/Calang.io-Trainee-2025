import { Router } from "express";
import { getMovies, getMoviesById } from "./controllers/movie-controller"
const router = Router();

router.get("/movies", getMovies);
router.get("/movies/:id", getMoviesById);

export default router;