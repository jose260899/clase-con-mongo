import { Router } from "express";

export const shopRouter = Router();



shopRouter.get('/', (req,res,next)=>{
    res.render('shop',{title: 'Ico', prods: [{title: 'Libro Molón'},{title: 'Moto'}]});
});

shopRouter.get('/saludo', (req,res,next)=>{
    res.render('prueba',{nombre: 'Ico'});
});
