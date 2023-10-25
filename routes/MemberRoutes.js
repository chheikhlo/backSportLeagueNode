const MemberController = require('../controllers/MemberController')
const router = require('express').Router()

// - GET : '/:id' : avec l'id du user en ligne on cherche le user dans les adherants et on liste ses produits dans son panier. 
// - POST : '/add/product' : le member ajoute un produit au panier

module.exports = router;