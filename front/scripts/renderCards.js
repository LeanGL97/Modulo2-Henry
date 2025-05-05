const movieContainer = document.querySelector(".section__movies");

const renderCards = (data) => {
    data.map((movie) => {
        const movieCard = document.createElement("div");
        movieCard.classList.add("movie__card--roboto-light");

        const movieLink = document.createElement("a");
        movieLink.href = "#";

        const movieTitle = document.createElement("h3");
        movieTitle.textContent = movie.title;

        const moviePoster = document.createElement("img");
        moviePoster.src = movie.poster;
        moviePoster.alt = `${movie.title} Poster`;

        const movieDuration = document.createElement("p");
        movieDuration.textContent = `Duración(Minutos): ${movie.duration}`;

        const movieYear = document.createElement("p");
        movieYear.textContent = `Año: ${movie.year}`;

        const movieDirector = document.createElement("p");
        movieDirector.textContent = `Director: ${movie.director}`;

        const movieGenre = document.createElement("p");
        movieGenre.textContent = `Genero: ${movie.genre}`;

        const movieRating = document.createElement("p");
        movieRating.textContent = `Valoración: ${movie.rate}`;

        movieLink.appendChild(movieTitle);
        movieCard.appendChild(movieLink);
        movieCard.appendChild(moviePoster);
        movieCard.appendChild(movieYear);
        movieCard.appendChild(movieDirector)
        movieCard.appendChild(movieDuration);
        movieCard.appendChild(movieGenre);
        movieCard.appendChild(movieRating);

        movieContainer.appendChild(movieCard);
    });
}

module.exports = renderCards;