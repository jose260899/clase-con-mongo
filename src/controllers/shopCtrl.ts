import { NextFunction, Request, Response } from "express";

import { Product } from "../models/Product.js";


export const getIndex = (req: Request,res: Response,next: NextFunction) => {  
    res.render('shop/index', {pageTitle:'Tienda', path:'/'});
};

export const getProducts = (req: Request,res: Response,next: NextFunction) => {  
    res.render('shop/product-list', {pageTitle:'Lista Productos', path:'/products', prods: Product.fetchAll()});
};

export const getSaludo = (req: Request,res: Response,next: NextFunction)=>{
    res.render('prueba',{nombre: 'Ico'});
}
