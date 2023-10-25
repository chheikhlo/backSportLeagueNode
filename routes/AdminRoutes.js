const AdminController = require('../controllers/AdminController')
const routerAdmin = require('express').Router()

// - POST : '/add/product' : Ajouter un produit
routerAdmin.post('/add/product', AdminController.postProducts())

// - PUT : '/put/:id' : modifier un produit
routerAdmin.put('/put/:id', AdminController.putProducts())

// - DELETE : '/delete/:id' : Supprimer Product
routerAdmin.delete('/delete/:id', AdminController.deleteProducts())


module.exports = router;