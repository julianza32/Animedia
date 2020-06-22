/* Contiene la representación de nuestra colección users en la DB*/

/* Modulos requeridos*/
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Objeto Schema 
var userSchema = new Schema({
    names: String,
    lastNames: String,
    cellphone: Number,
    birthdate: Date,
    email: String,
    pass: String,
    rol: String,
    image: String
    
});

//Exportar el modelo 
module.exports = mongoose.model('user', userSchema);