const ProductController = require('../controllers/ProductController')
const routerProduct = require('express').Router()


// - GET : '/' : Liste de produits
routerProduct.get('/', ProductController.getProducts)
// Get un produit by Id
routerProduct.get("/:id", ProductController.getProductsById)

module.exports = routerProduct;
