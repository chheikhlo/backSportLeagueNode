const UserController = require('../controllers/UserController');
const routerUser = require('express').Router();

/**
 * @swagger
 * /user/login:
 *   post:
 *     summary: Connexion d'un utilisateur
 *     description: Permet à un utilisateur de se connecter en fournissant son email et son mot de passe.
 *     tags:
 *       - Users
 *     responses:
 *       200:
 *         description: Connexion réussie
 *       404:
 *         description: Utilisateur non trouvé
 *       500:
 *         description: Erreur serveur
 */
routerUser.post('/login', UserController.loginUser);

/**
 * @swagger
 * /user/register:
 *   post:
 *     summary: Inscription d'un nouvel utilisateur
 *     description: Permet à un nouvel utilisateur de s'inscrire en fournissant ses informations personnelles.
 *     tags:
 *       - Users
 *     responses:
 *       200:
 *         description: Utilisateur enregistré avec succès
 *       400:
 *         description: Erreur client
 *       500:
 *         description: Erreur serveur
 */
routerUser.post('/register', UserController.registerUser);

// // - POST : '/' : S'inscrire un utilisateur
routerUser.post('/register', UserController.registerUser)
// Router pour le panier d'un membre
routerUser.post('/cart', UserController.addCart)

// // // Bonus
// // - PUT : '/put/:id' : modifier mes infos
// routerUser.put('/put/:id', UserController.putUser)

// // - DELETE : '/delete/:id' : Supprimer mon compte
// routerUser.delete('/delete/:id', UserController.deleteUser)

/**
 * @swagger
 * /user/admin/add/product:
 *   post:
 *     summary: Ajouter un produit (admin)
 *     description: Permet à un administrateur d'ajouter un nouveau produit à la liste.
 *     tags:
 *       - Admin
 *     responses:
 *       200:
 *         description: Produit ajouté avec succès
 *       400:
 *         description: Erreur client
 *       500:
 *         description: Erreur serveur
 */
routerUser.post('/admin/add/product', UserController.addProduct);

/**
 * @swagger
 * /user/admin/put/product/{id}:
 *   put:
 *     summary: Modifier un produit (admin)
 *     description: Permet à un administrateur de modifier un produit existant en fonction de son ID.
 *     tags:
 *       - Admin
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID du produit à modifier
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Produit modifié avec succès
 *       404:
 *         description: Produit non trouvé
 */
routerUser.put('/admin/put/product/:id', UserController.putProduct);

/**
 * @swagger
 * /user/admin/delete/product/{id}:
 *   delete:
 *     summary: Supprimer un produit (admin)
 *     description: Permet à un administrateur de supprimer un produit existant en fonction de son ID.
 *     tags:
 *       - Admin
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID du produit à supprimer
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Produit supprimé avec succès
 *       404:
 *         description: Produit non trouvé
 *       500:
 *         description: Erreur serveur
 */
routerUser.delete('/admin/delete/product/:id', UserController.deleteProduct);

module.exports = routerUser;


