const Movie = require("../models/Movie");

module.exports = {
    getMovies : async () => {
        const movies = await Movie.find();
        return movies;
    },

    createMovie : async (movieData) => {
        const movie = new Movie(movieData);
        await movie.save();
        return movie;
    },
};