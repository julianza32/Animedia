/* Contiene la configuración del servidor con su framework express */

const express = require('express');
const app = express();

//Declaración de cors 
const cors=require('cors');

//variable de rutas a ejecutar
const userRouter = require('./routes/userRouter');
const movieRouter = require('./routes/movieRouter');

// -- Middlewares -- (fragmento de codigo que se ejecuta entre la petición y la respuesta)
app.use(express.json());
app.use(cors());

// Consumo de las rutas 
app.use('/api',userRouter);
app.use('/api',movieRouter);

// -- Fin Middlewares --

// Exportación del módulo
module.exports = app;