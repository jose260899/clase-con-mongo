import { NextFunction, Request, Response } from "express";

import { productos } from "../models/Product.js";

export const getIndex = (req: Request,res: Response,next: NextFunction) => {  
    res.render('shop/product-list', {pageTitle:'Tienda', path:'/', prods: productos});
};

export const getSaludo = (req: Request,res: Response,next: NextFunction)=>{
    res.render('prueba',{nombre: 'Ico'});
}
