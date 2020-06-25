/* Contiene todo el proceso de rutas referentes a movie */

/* Impotar modulos necesarios*/
const express = require('express');
const MovieControl = require('../controllers/movieController');

//Importar el paquete connect-multiparty
const multiparty = require('connect-multiparty');
//A través de connect-multiparty, apuntamos a la carpeta que deseemos en que se guarden los archivos
const  subirImgDirectorio = multiparty({uploadDir: './files/movies'});
const  subirTrailerDirectorio = multiparty({uploadDir: './files/movies'});

var api = express.Router();

//Ruta Registrar película
api.post('/registerMovie', MovieControl.registerMovie);

//Ruta Obtener todos las películas
api.get('/getAllMovies', MovieControl.getAllMovies);

//Ruta Obtener una película en especÍfico por medio de su ID
api.get('/getMovie/:id', MovieControl.getMovie);

//Ruta Actualizar película
api.put('/updateMovie/:id', MovieControl.updateMovie);

//Ruta Eliminar película
api.delete('/deleteMovie/:id', MovieControl.deleteMovie);

//Ruta subir imagen de película
api.put('/uploadMovieImage/:id', subirImgDirectorio, MovieControl.uploadMovieImage);

//Ruta para mostrar imagen de película
api.get('/getMovieImage/:imageFile',MovieControl.getMovieImage);

//Ruta subir trailer de película
api.put('/uploadMovieTrailer/:id', subirTrailerDirectorio, MovieControl.uploadMovieTrailer );

//Ruta para mostrar trailer de película
api.get('/getMovieTrailer/:trailerFile',MovieControl.getMovieTrailer);

//ruta para obtener una canción en especifico
api.get('/searchMovies/', MovieControl.searchMovies);


//Exportar el modulo
module.exports = api;