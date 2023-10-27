const UserController = require('../controllers/UserController')
const routerUser = require('express').Router()

// //User :

// // - GET : '/' : Se connecter
routerUser.post('/login', UserController.loginUser)

// // - POST : '/' : S'inscrire un utilisateur
routerUser.post('/register', UserController.registerUser)
// Router pour le panier d'un membre
routerUser.post('/cart', UserController.addCart)

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

// // - POST : '/add/product' : Ajouter un produit
// routerUser.post('/add/product', UserController.postProducts)

// // - PUT : '/put/:id' : modifier un produit
// routerUser.put('/put/:id', UserController.putProducts)

// // - DELETE : '/delete/:id' : Supprimer Product
// routerUser.delete('/delete/:id', UserController.deleteProducts)


module.exports = routerUser;
