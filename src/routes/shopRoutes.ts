import { Router } from "express";

export const shopRouter = Router();



shopRouter.get('/', (req,res,next)=>{
    res.render('prueba',{nombre: 'Ico'});
});

shopRouter.get('/saludo', (req,res,next)=>{
    res.render('prueba',{nombre: 'Ico'});
});
