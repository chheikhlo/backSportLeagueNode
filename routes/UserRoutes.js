// const UserController = require('../controllers/UserController')
// const routerUser = require('express').Router()

// //User :

// // - GET : '/' : Se connecter
// routerUser.get('/', UserController.loginUser())

// // - POST : '/' : S'inscrire un produit
// routerUser.post('/', UserController.registerUser())

// // // Bonus
// // - PUT : '/put/:id' : modifier mes infos
// routerUser.put('/put/:id', UserController.putUser())

// // - DELETE : '/delete/:id' : Supprimer mon compte
// routerUser.delete('/delete/:id', UserController.deleteUser())

// // - GET : '/:id' : avec l'id du user en ligne on cherche le user dans les adherants et on liste ses produits dans son panier.
// routerMember.get('/:id', UserController.getBasket())

// // - PUT : '/add/product' : le member ajoute un produit au panier
// routerMember.put('/add/product', UserController.addProductToHisBasket())


// //Admin :

// // const routerAdmin = require('express').Router()

// // - POST : '/add/product' : Ajouter un produit
// // routerAdmin.post('/add/product', UserController.postProducts())

// // - PUT : '/put/:id' : modifier un produit
// // routerAdmin.put('/put/:id', UserController.putProducts())

// // - DELETE : '/delete/:id' : Supprimer Product
// // routerAdmin.delete('/delete/:id', UserController.deleteProducts())


// module.exports = routerUser;
