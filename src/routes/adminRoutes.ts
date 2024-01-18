import { Router } from "express";

import { getAddProduct, getEditProduct, getProducts, postAddProduct } from "../controllers/adminCtrl.js";

export const adminRouter = Router();



//todas las rutas que llegan aquí empiezan por /admin

adminRouter.get('/products',getProducts);
adminRouter.get('/add-product',getAddProduct);
adminRouter.post('/add-product',postAddProduct);
adminRouter.get('/add-product/:productId', getEditProduct);
