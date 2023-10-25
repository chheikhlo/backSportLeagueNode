const UserController = require('../controllers/UserController')
const routerUser = require('express').Router()

// - GET : '/' : Se connecter
routerUser.get('/', UserController.loginUser())

// - POST : '/' : S'inscrire un produit
routerUser.post('/', UserController.registerUser())

// // Bonus
// - PUT : '/put/:id' : modifier mes infos
routerUser.put('/put/:id', UserController.putUser())

// - DELETE : '/delete/:id' : Supprimer mon compte
routerUser.delete('/delete/:id', UserController.deleteUser())

module.exports = routerUser;
