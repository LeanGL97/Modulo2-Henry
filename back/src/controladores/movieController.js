const movieService = require("../servicios/movieService");

const getMovies = async (req, res) => {
    try {
        const movies = await movieService.getMovies();
        res.status(200).json(movies);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener las películas" });
    }
};

const createMovie = async (req, res) => {
    try {
        const movieData = req.body;
        const newMovie = await movieService.createMovie(movieData);
        res.status(201).json({ message: "Película creada exitosamente", movie: newMovie });
    } catch (error) {
        res.status(500).json({ message: "Error al crear la película" });
    }
};

module.exports = {
    getMovies,
    createMovie,
};