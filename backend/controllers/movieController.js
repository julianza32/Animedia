/* Contiene las funciones o métodos para la manipulación de movies */

const Movie = require('../models/Movie');

// Importar módulo File System
const fs = require('fs');
// Importar modulo path
const path = require('path');

//Función de registrar usuario
function registerMovie(req, res){
    var movie = new Movie();
    var parameters = req.body;

    movie.title = parameters.title;
    movie.genre = parameters.genre;
    movie.year = parameters.year;
    movie.duration = parameters.duration;
    movie.synopsis = parameters.synopsis;
    movie.actors = parameters.actors;
    movie.director = parameters.director;
    movie.releaseDate = parameters.releaseDate;
    movie.classification = parameters.classification
    movie.image = null;

    //Función save() para interactuar con la DB
    movie.save((err, movieNew)=>{
        if(err){
            res.status(500).send({message: "Error en el servidor"})
        }else{
            if(!movieNew){
                res.status(200).send({message: "No fue posible realizar el registro"})
            }else{
                res.status(200).send({
                    message: "Película creada",
                    movie: movieNew
                });   
            }
        }
    }); 

}

//Función de mostrar todos las películas
function getAllMovies(req, res){
    Movie.find({},{title:1},{sort:{title:1}},(err, moviesFound)=>{
        if(err){
            res.status(500).send({message: "Error en el servidor"});
        }else{
            if(!moviesFound){
                res.status(200).send({message:"No fue posible encontrar películas"});
            }else{
                res.status(200).send({
                    message: "Películas encontrados",
                    movies: moviesFound
                });
            }
        }
    });

}

//Función de mostrar una película en especifico
function getMovie(req, res){
    var movieId = req.params.id;
    Movie.findById(movieId, (err, movieFound)=>{
        if(err){
            res.status(500).send({message: "Error en el servidor"});
        }else{
            if(!movieFound){
                res.status(200).send({message:"No fue posible encontrar la película"});
            }else{
                res.status(200).send({
                    message: "Película encontrada",
                    movie: movieFound
                });
            }
        }
    });

}

//Función de actualizar película
function updateMovie(req, res){ 
    var movieId = req.params.id;
    var newMovieData = req.body;

    Movie.findByIdAndUpdate(movieId, newMovieData, (err, updatedMovie)=>{
        if(err){
            res.status(200).send({message:"Error en el servidor"});
        }else{
            if(!updatedMovie){
                res.status(200).send({message:"No fue posible actualizar la película"});
            }else{
                res.status(200).send({
                    message:"Película actualizada",
                    movie: updatedMovie
                });
            }
        }
    });
}

//Función de eliminar usuario
function deleteMovie(req, res){
    var movieId = req.params.id; 
    
    Movie.findByIdAndDelete(movieId, (err, deletedMovie)=>{
        if(err){
            res.status(500).send({message: "Error en el servidor"});
        }else{
            if(!deletedMovie){
                res.status(200).send({message:"No fue posible eliminar la película"});
            }else{
                res.status(200).send({
                    message:"Película eliminada",
                    movie: deletedMovie
                });
            }
        }
    });
}


function uploadMovieImage(req, res){
    var movieId = req.params.id;
    var nombreArchivo = "No has subido ninguna imagen...";

    //Validar si efectivamente se esta enviando un archivo

    if (req.files) {
        // Vamos a ir analizando la ruta del archivo, el nombre y la extención
        // C:\\usuarios\descargas\imagen.png
        var rutaArchivo = req.files.image.path ;
        console.log(`Ruta archivo: ${rutaArchivo}`);

        // Haremos un split para separar elementos
        // Esto nos generará un arreglo de datos
        var partirArchivo = rutaArchivo.split('\\');
        console.log(`partir archivo: ${partirArchivo}`);

        //Acceder a la posicion que contiene el nombre del archivo
        var nombreArchivo = partirArchivo[2];
        console.log(`Posición dato: ${nombreArchivo}`);

        //Haremos un split para separar el nombre del archivo de la extencion
        //['imagen','png']
        var extensionImg = nombreArchivo.split('\.');
        console.log(`partir imagen: ${extensionImg}`);

        //Accedemos a la pocision de la extencion de l archivo
        var extensionArchivo = extensionImg[1];
        console.log(`Extension archivo: ${extensionArchivo}`);

        // Validar si el formato del archivo es aceptable 

        if(extensionArchivo == 'png'||extensionArchivo=='jpg'||extensionArchivo=='jpeg'){
            //Actulizar del usuario el campo imagen

            Movie.findByIdAndUpdate(movieId,{image:nombreArchivo},(err,movieConImg)=>{
                if(err){
                    res.status(500).send({message: "Error en el servidor"});
                }else{
                    if(!movieConImg){
                        res.status(200).send({message: "No fue posible subir la imagen"});
                    }else{
                        res.status(200).send({
                            message: "Imagen anexada",
                            imagen: nombreArchivo,
                            movie: movieConImg
                        })
                    }
                }
            });
        }else{
            res.status(200).send({message:"Formato invalido! El archivo no es una imagen"})
        }
    } else {
        res.status(200).send({ message: "No has subido imagen" });
    }
}

function getMovieImage(req, res){
    //pedir el archivo que queros mostrar
    var archivo = req.params.imageFile;
    //ubicacion del archivo 
    var ruta = './files/movies/'+archivo;

    //validar si existe o no 
    //fs.exists('la ruta del archivo a buscar, (existencia)=>{}')

    fs.exists(ruta,(exists)=>{
        if(exists){
            res.sendFile(path.resolve(ruta));
        }else{
            res.status(200).send({message: "Imagen no encontrada"});
        }
    });
}


function uploadMovieTrailer(req, res){
    var movieId = req.params.id;
    var nombreArchivo = "No has subido ningún trailer...";

    //Validar si efectivamente se esta enviando un archivo

    if (req.files) {
        // Vamos a ir analizando la ruta del archivo, el nombre y la extención
        // C:\\usuarios\descargas\video.mp4
        var rutaArchivo = req.files.trailer.path ;
        console.log(`Ruta archivo: ${rutaArchivo}`);

        // Haremos un split para separar elementos
        // Esto nos generará un arreglo de datos
        var partirArchivo = rutaArchivo.split('\\');
        console.log(`partir archivo: ${partirArchivo}`);

        //Acceder a la posicion que contiene el nombre del archivo
        var nombreArchivo = partirArchivo[2];
        console.log(`Posición dato: ${nombreArchivo}`);

        //Haremos un split para separar el nombre del archivo de la extencion
        //['video','mp4']
        var extensionImg = nombreArchivo.split('\.');
        console.log(`partir : ${extensionImg}`);

        //Accedemos a la pocision de la extencion del archivo
        var extensionArchivo = extensionImg[1];
        console.log(`Extension archivo: ${extensionArchivo}`);

        // Validar si el formato del archivo es aceptable 

        if(extensionArchivo == 'mp4'){
            //Actulizar la película el campo trailer

            Movie.findByIdAndUpdate(movieId,{trailer:nombreArchivo},(err,movieConTrailer)=>{
                if(err){
                    res.status(500).send({message: "Error en el servidor"});
                }else{
                    if(!movieConTrailer){
                        res.status(200).send({message: "No fue posible subir el video"});
                    }else{
                        res.status(200).send({
                            message: "Trailer anexado",
                            video: nombreArchivo,
                            movie: movieConTrailer
                        })
                    }
                }
            });
        }else{
            res.status(200).send({message:"Formato invalido! El archivo no es una video"})
        }
    } else {
        res.status(200).send({ message: "No has subido video" });
    }
}

function getMovieTrailer(req, res){
    //pedir el archivo que queros mostrar
    var archivo = req.params.trailerFile;
    //ubicacion del archivo 
    var ruta = './files/movies/'+archivo;

    //validar si existe o no 
    //fs.exists('la ruta del archivo a buscar, (existencia)=>{}')

    fs.exists(ruta,(exists)=>{
        if(exists){
            res.sendFile(path.resolve(ruta));
        }else{
            res.status(200).send({message: "Trailer no encontrado"});
        }
    });
}

function searchMovies(req, res){
    var parametros = req.body;
    var busqueda = parametros.busqueda;//busqueda = {busqueda:value}
    console.log(busqueda);
    
    Movie.find({$or: [
            { title: {$regex: busqueda, $options: 'i'} } ,{ genre: {$regex: busqueda, $options: 'i'} },{ director: {$regex: busqueda, $options: 'i'} } 
    ]}, (err, movieEncontrada)=>{
        //console.log(movieEncontrada);
        if(err){
            res.status(500).send({message: "Error en el servidor"});
        }else{
            res.status(200).send({
                message:"El resultado de tu busqueda es:",
                movie: movieEncontrada
            });
         }
        
    });
}


module.exports = {
    registerMovie,
    getAllMovies,
    getMovie,
    updateMovie,
    deleteMovie,
    uploadMovieImage,
    getMovieImage,
    uploadMovieTrailer,
    getMovieTrailer,
    searchMovies


}









