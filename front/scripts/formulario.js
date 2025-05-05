document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("form-pelicula");
    const btnLimpiar = document.getElementById("btn-limpiar");
    console.log(form);

    if (form) {
        form.addEventListener("submit", async function (event) {
            event.preventDefault();

            const title = document.getElementById("title").value;
            const director = document.getElementById("director").value;
            const year = document.getElementById("year").value;
            const genre = document.getElementById("genre").value;
            const duration = document.getElementById("duration").value;
            const rate = document.getElementById("rate").value;
            const poster = document.getElementById("poster").value;

            if (title && director && year && genre && duration && rate && poster) {
                const submitButton = event.target.querySelector('button[type="submit"]');
                submitButton.disabled = true;

                try {
                    const response = await axios.post("http://localhost:3000/movies", {
                        title: title,
                        director: director,
                        year: year,
                        genre: [genre],
                        duration: duration,
                        rate: rate,
                        poster: poster
                    });

                    alert("Película creada exitosamente!");
                    console.log(response.data);
                    form.reset();
                } catch (error) {
                    console.error("Error al crear la película:", error.message);
                    alert("Error al crear la película. Por favor, intenta nuevamente.");
                } finally {
                    submitButton.disabled = false;
                }
            } else {
                alert("Por favor, completa todos los campos.");
            }
        });
    }

    if (btnLimpiar) {
        btnLimpiar.addEventListener("click", function () {
            form.reset();
        });
    }
});

