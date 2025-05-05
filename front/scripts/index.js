const axios = require("axios");
const renderCards = require("./renderCards");
require("./formulario")

axios.get("http://localhost:3000/movies")
.then((resultado) => {   
    renderCards(resultado.data);
})
.catch((error) => {
    console.error("Error al obtener las películas:", error.message);    
});