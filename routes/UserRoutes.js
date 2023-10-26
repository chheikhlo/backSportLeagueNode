const UserController = require('../controllers/UserController')
const routerUser = require('express').Router()

// //User :

// // - GET : '/' : Se connecter
routerUser.post('/login', UserController.loginUser)

// // - POST : '/' : S'inscrire un utilisateur
routerUser.post('/register', UserController.registerUser)

// // // Bonus
// // - PUT : '/put/:id' : modifier mes infos
// routerUser.put('/put/:id', UserController.putUser)

// // - DELETE : '/delete/:id' : Supprimer mon compte
// routerUser.delete('/delete/:id', UserController.deleteUser)

// // - GET : '/:id' : avec l'id du user en ligne on cherche le user dans les adherants et on liste ses produits dans son panier.
// routerUser.get('/:id', UserController.getBasket)

// // - PUT : '/add/product' : le member ajoute un produit au panier
// routerUser.put('/add/product', UserController.addProductToHisBasket)


// //Admin :

// // - POST : '/admin/add/product' : Ajouter un produit
routerUser.post('/admin/add/product', UserController.addProduct)

// // - PUT : '/put/:id' : modifier un produit
routerUser.put('/admin/put/product/:id', UserController.putProduct)

// // - DELETE : '/delete/:id' : Supprimer Product
routerUser.delete('/admin/delete/product/:id', UserController.deleteProduct)


module.exports = routerUser;
