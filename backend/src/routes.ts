import { Router } from "express";
import { getMovies, getMoviesById, searchMovies, postMovie, deleteMovie, patchMovie } from "./controllers/movie-controller"
import { postContact, getContacts } from "./controllers/contact-controller";
const router = Router();

router.get("/movies/search", searchMovies);
router.get("/movies", getMovies);
router.get("/movies/:id", getMoviesById);
router.post("/movies", postMovie);
router.delete("/movies/:id", deleteMovie);
router.patch("/movies/:id", patchMovie);

router.get("/contacts", getContacts);
router.post("/contacts", postContact);

export default router;