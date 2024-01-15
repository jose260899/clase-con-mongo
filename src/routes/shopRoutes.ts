import { Router } from "express";


export const shopRouter =  Router();

//Usamos get y por lo tanto exige coincidencia "completa", no capa otras rutas
shopRouter.get('/', (req,res,next) => {  
    res.render('shop', {pageTitle:'Tienda', path:'/', prods: products});
});
shopRouter.get('/saludo', (req,res,next)=>{
    res.render('prueba',{nombre: 'Ico'});
})