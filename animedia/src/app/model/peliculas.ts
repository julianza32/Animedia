export class Pelicula{
    constructor(
        public _id: String,
        public title: String,
        public genre: String,
        public year: String,
        public duration: String,
        public synopsis: String,
        public actors: [],
        public director: String,
        public releaseDate:String,
        public classification,
        public image: String,
        public trailer: String,
        public movie: String
    ){}
}