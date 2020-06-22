/* Contine toda a logica para conexion con DB y puerto del servidor */

/* Modulos requeridos*/
const mongoose = require('mongoose');
const app = require('./app');

const port = 3000; 
/* Método para realizar la conexión con mongo */
mongoose.connect('mongodb://localhost:27017/animediaDB', (err, res)=>{
    //Validar conexion
    if(err){
        console.log(`El error es: ${err}`);
        
    }else{
        console.log(`Conexion con DB exitosa`);
        //Generar servidor con su puerto
        app.listen(port, ()=>{
            console.log(`Puerto: ${port}`);
        });
    }
});