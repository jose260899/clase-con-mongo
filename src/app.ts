import express from "express";

import { rutas } from "./utils/rutas.js";

console.log('------------------------------------------------------------_---');
console.log("Bienvenido a mi app");

const port =  3000;

const app = express();

app.set('view engine', 'ejs');
app.set('views',rutas.views); //CAMBIAR
//Controladores para responder a las peticiones por HTTP

app.get('/saludo', (req,res,next)=>{
    res.render('prueba',{nombre: 'Ico'});
})

app.get('/automovil',(req,res,next)=>{
    console.log("Pasamos por el primer middleware app.get");
    res.redirect("/coche");
})

app.use('/coche',(req, res, next) => {
    console.log("Ha llegado una petición");
    next();
});

app.use('/', (req,res,next)=> {
    console.log("Middleware del final");
    res.status(404).send({'error':'mal hecho'});
})

app.use('/coche', (req,res,next) => {
    console.log("Estamos en el segundo middleware");
    res.send({"message":"ok"});
});

// FIN 
app.listen(port);
console.log("Servidor de la app en marcha");