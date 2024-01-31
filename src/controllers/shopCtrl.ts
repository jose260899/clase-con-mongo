import { NextFunction, Request, Response } from "express";

import { Product } from "../models/Product.js";
import { Cart } from "../models/Cart.js";


export const getIndex = (req: Request,res: Response,next: NextFunction) => {  
    res.render('shop/index', {pageTitle:'Tienda', path:'/'});
};

export const getProducts = async (req: Request,res: Response,next: NextFunction) => {  
    res.render('shop/product-list', 
    {
        pageTitle:'Listducta Productos', 
        path:'/products', 
        prods: await Product.fetchAll()
    });
};  

export const getProductById = async (req: Request,res: Response,next: NextFunction) => { 
    const productId = req.params.productId; 
    console.log(productId)
    const product = await Product.findById(productId);
    if(product){
         res.render('shop/product-detail', {pageTitle:product.title, path:'', product: product});
     }else{
         res.status(404).render('404.ejs',{pageTitle: 'Producto No Encontrado',path:''});    
     }
};
// export const getCart =  (req: Request,res: Response,next: NextFunction)=>{
//     const ci = Cart.getCart();
//     const items = ci.map( ci => {
//         const product = Product.findById(ci.id);
//         if(product){
//             return {
//                 id: ci.id,
//                 title: product.title,
//                 price: product.price,
//                 qty: ci.qty
//             }
//         }
//         return {};
//     });

//     res.render('shop/cart',{
//         pageTitle: 'Carro de la compra',
//         path: '/cart',
//         items: items,
//     })
// };

// export const postCart = (req: Request,res: Response,next: NextFunction)=>{
//     const productId = +req.body.productId;
//     console.log('postCart: Añadimos al carro el producto: ',productId);
//     Cart.addProduct(productId,1);
//     res.redirect('/cart');
// }
// export const deleteCartItem =  (req: Request,res: Response,next: NextFunction)=>{
//     const productId = +req.body.productId;
//     Cart.deleteProduct(productId);
//     res.redirect('/cart');
// };
// export const postCartIncreaseItem = (req: Request,res: Response,next: NextFunction)=>{
//     const productId = +req.body.productId;
//     Cart.addProduct(productId,1);
//     res.redirect('/cart');
// };

// export const postCartDecreaseItem = (req: Request,res: Response,next: NextFunction)=>{
//     const productId = +req.body.productId;
//     Cart.decreaseProduct(productId);
//     res.redirect('/cart');
// };

// export const getSaludo = (req: Request,res: Response,next: NextFunction)=>{
//     res.render('prueba',{nombre: 'Ico'});
// };
