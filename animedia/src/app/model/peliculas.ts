export class Pelicula{
    constructor(
        public _id: String,
        public nombre: String,
        public genero: String,
        public director: String,
        public actores: [],
        public año: String,
        public duración: String,
        public sinopsis: String,
        public imagen: String,
        public trailer: File,
        public pelicula: String
    ){}
}