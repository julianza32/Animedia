/* Contiene todo el proceso de rutas referentes al user */

/* Impotar modulos necesarios*/
const express = require('express');
const UserControl = require('../controllers/userController');

//importar el paquete connect-multiparty
const multipart = require('connect-multiparty');
//A través de connect-multiparty, apuntamos a la carpeta que deseemos en que se guarden los archivos
const  subirImgDirectorio = multipart({uploadDir: './files/users'});


var api = express.Router();


//Ruta Registrar usuario
api.post('/registerUser', UserControl.registerUser);

//Ruta Obtener todos los usuarios
api.get('/getAllUsers', UserControl.getAllUsers);

//Ruta Obtener un usuario en especÍfico por medio de su ID
api.get('/getUser/:id', UserControl.getUser);

//Ruta Actualizar usuario
api.put('/updateUser/:id', UserControl.updateUser);

//Ruta Eliminar usuario
api.delete('/deleteUser/:id', UserControl.deleteUser);

//Ruta Logueo de usuario
api.post('/login', UserControl.login);

//Ruta subir imagen usuario
api.put('/uploadUserImage/:id', subirImgDirectorio, UserControl.uploadUserImage);

//Ruta para mostrar imagen usuario
api.get('/getUserImage/:imageFile',UserControl.getUserImage);

//Exportar el modulo
module.exports = api;
