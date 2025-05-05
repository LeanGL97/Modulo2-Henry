const { Router } = require("express");
const movieController = require("../controladores/movieController");
const validateMovie = require("../middleware/validateMovie");

const router = Router();

router.get("/movies", movieController.getMovies);

router.post("/movies", validateMovie, movieController.createMovie);


module.exports = router;