const ProductController = require('../controllers/ProductController')
const routerProduct = require('express').Router()


// - GET : '/' : Liste de produits
routerProduct.get('/', ProductController.getProducts())

module.exports = routerProduct;
