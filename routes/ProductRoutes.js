const ProductController = require('../controllers/ProductController')
const router = require('express').Router()


// - GET : '/' : Liste de produits
router.get('/', ProductController.getProducts())

module.exports = router;
