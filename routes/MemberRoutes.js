const MemberController = require('../controllers/MemberController')
const routerMember = require('express').Router()

// - GET : '/:id' : avec l'id du user en ligne on cherche le user dans les adherants et on liste ses produits dans son panier. 
routerMember.get('/:id', MemberController.getBasket())

// - PUT : '/add/product' : le member ajoute un produit au panier
routerMember.put('/add/product', MemberController.addProductToHisBasket())

module.exports = router;