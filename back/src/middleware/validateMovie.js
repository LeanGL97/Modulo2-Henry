const validateMovie = (req, res, next) => {
    const { title, year, director, duration, genre, rate, poster } = req.body;

    if (!title || !year || !director || !duration || !genre || !rate || !poster) {
        return res.status(400).json({ message: "Todos los campos son obligatorios" });
    }
    
    next();
};

module.exports = validateMovie;
