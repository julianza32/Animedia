const mongoose = require('mongoose');
const Shema = mongoose.Shema;

var peliShema = new Shema({
    nombre: String,
    genero: String,
    director: String,
    actores: [],
    año: String,
    duración: String,
    sinopsis: String,
    imagen: String,
    trailer: File,
    pelicula: String
});