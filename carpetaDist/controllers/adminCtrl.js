import { Product } from "../models/Product.js";
export const getProducts = async (req, res) => {
    res.render('admin/products', {
        pageTitle: 'Admin Products',
        path: '/admin/products',
        prods: await Product.fetchAll()
    });
};
export const getAddProduct = (req, res, next) => {
    console.log("Devolvemos el formulario para meter productos");
    res.render('admin/edit-product', { pageTitle: "Formulario", path: "/admin/add-product", editing: false });
};
export const postAddProduct = async (req, res, next) => {
    const title = req.body.title;
    const imageUrl = req.body.imageUrl;
    const description = req.body.description;
    console.log(description);
    const price = +req.body.price;
    if (req.body.title) {
        const producto = new Product(title, imageUrl, description, price);
        await producto.save();
    }
    res.redirect('/products');
};
// export const postAddProduct = (req: Request, res: Response, next: NextFunction) => {
//     const title = req.body.title;
//     const imageUrl =  req.body.imageUrl;
//     const description = req.body.description;
//     console.log(description);
//     const price = +req.body.price;
//     if(req.body.title){
//         console.log('Ha llegado el siguiente producto: ',req.body.title);
//         const producto = new Product(
//             title,
//             imageUrl,
//             description,
//             price
//         );
//         producto.save();
//     }
//     console.log('pasa')
//     res.redirect('/products');  
// };
export const getEditProduct = async (req, res, next) => {
    console.log("getEdtitProduct: Devolvemos el formulario para editar productos");
    const editMode = req.query.edit === 'true';
    if (!editMode) {
        return res.redirect('/products');
    }
    const productId = req.params.productId;
    const product = await Product.findById(productId);
    if (product) {
        res.render('admin/edit-product', {
            pageTitle: "Formulario edición",
            path: "/admin/add-product", //Ebtrada de la barra de navegación que vamos a sombrear    
            editing: editMode,
            product: product
        });
    }
    else {
        res.redirect('/products');
    }
};
export const postEditProduct = (req, res, next) => {
    const productId = req.body.productId;
    const title = req.body.title;
    const imageUrl = req.body.imageUrl;
    const description = req.body.description;
    const price = +req.body.price;
    const product = new Product(title, imageUrl, description, price, productId);
    product.save();
    res.redirect('/admin/products');
};
export const postDeleteProductById = (req, res, next) => {
    const productId = req.body.productId;
    console.log('Borrando producto con id: ', productId);
    Product.deleteById(productId);
    res.redirect('/admin/products');
};
