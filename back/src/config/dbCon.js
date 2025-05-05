require("dotenv").config();

const mongoose = require("mongoose");

const dbCon = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI,);
        console.log("Conectado a MongoDB");
    } catch (error) {
        console.error("Error de conexión a MongoDB:", error.message);
    }
};

module.exports = dbCon;
