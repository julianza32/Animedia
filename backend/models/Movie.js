 /* Contiene la representación de nuestra colección movies en la DB*/

/* Modulos requeridos*/
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Objeto Schema 
var movieSchema = new Schema({
    title: String,
    genre: String,
    year: Number,
    duration: String,
    synopsis: String,
    actors: [],
    director: String,
    releaseDate: Date,
    classification: String,
    image: String,
    
});

//Exportar el modelo 
module.exports = mongoose.model('movie', movieSchema);