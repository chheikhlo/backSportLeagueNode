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
routerUser.post('/user/login', UserController.loginUser);

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
routerUser.post('/user/register', UserController.registerUser);

/**
 * @swagger
 * /delete/user/{id}:
 *   delete:
 *     summary: Supprimer le profil de l'utilisateur
 *     description: Permet à un utilisateur de supprimer son propre profil en fonction de son ID.
 *     tags:
 *       - Users
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de l'utilisateur à supprimer
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Profil de l'utilisateur supprimé avec succès
 *       404:
 *         description: Utilisateur non trouvé
 *       500:
 *         description: Erreur serveur
 */
routerUser.delete('/delete/user/:id', UserController.deleteUsers);

/**
 * @swagger
 * /put/user/{id}:
 *   put:
 *     summary: Modifier le profil de l'utilisateur
 *     description: Permet à un utilisateur de modifier son propre profil en fonction de son ID.
 *     tags:
 *       - Users
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de l'utilisateur à modifier
 *         schema:
 *           type: string
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nom:
 *                 type: string
 *               prenom:
 *                 type: string
 *               email:
 *                 type: string
 *               mot_de_passe:
 *                 type: string
 *             required:
 *               - nom
 *               - prenom
 *               - email
 *               - mot_de_passe
 *     responses:
 *       200:
 *         description: Profil de l'utilisateur modifié avec succès
 *       404:
 *         description: Utilisateur non trouvé
 *       500:
 *         description: Erreur serveur
 */
routerUser.put('/put/user/:id', UserController.putUser);

/**
 * @swagger
 * /add/product/cart:
 *   post:
 *     summary: Ajouter un produit au panier de l'utilisateur
 *     description: Permet à un utilisateur d'ajouter un produit à son panier.
 *     tags:
 *       - Users
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               productId:
 *                 type: string
 *             required:
 *               - productId
 *     responses:
 *       200:
 *         description: Produit ajouté au panier avec succès
 *       400:
 *         description: Erreur client
 *       500:
 *         description: Erreur serveur
 */
routerUser.post('/add/product/cart', UserController.addProductToHisBasket);

/**
 * @swagger
 * /user/get/cart/{id}:
 *   get:
 *     summary: Obtenir le contenu du panier de l'utilisateur
 *     description: Permet à un utilisateur d'accéder au contenu de son panier en fonction de son ID.
 *     tags:
 *       - Users
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de l'utilisateur
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Contenu du panier récupéré avec succès
 *       404:
 *         description: Panier non trouvé
 *       500:
 *         description: Erreur serveur
 */
routerUser.get('/user/get/cart/:id', UserController.getCartUser);

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Obtenir la liste des utilisateurs (admin)
 *     description: Permet à un administrateur d'accéder à la liste des utilisateurs.
 *     tags:
 *       - Admin
 *     responses:
 *       200:
 *         description: Liste des utilisateurs récupérée avec succès
 *       500:
 *         description: Erreur serveur
 */
routerUser.get('/users', UserController.getUsers);

/**
 * @swagger
 * /users/{id}:
 *   get:
 *     summary: Get user by ID
 *     description: Retrieve a user by their ID
 *     tags:
 *       - Admin
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the user to retrieve
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: A user object
 *       '404':
 *         description: User not found
 */
routerUser.get('/users/:id', UserController.getUserById);

/**
 * @swagger
 * /delete/cart/{id}:
 *   delete:
 *     summary: Confirmer et vider le panier de l'utilisateur
 *     description: Permet à un utilisateur de confirmer son panier, vidant ainsi son contenu.
 *     tags:
 *       - Users
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de l'utilisateur
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Panier confirmé et vidé avec succès
 *       404:
 *         description: Panier non trouvé
 *       500:
 *         description: Erreur serveur
 */
routerUser.delete('/delete/cart/:id', UserController.deleteCartUser);

/**
 * @swagger
 * /admin/add/product:
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
 * /admin/put/product/{id}:
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
 * /admin/delete/product/{id}:
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

//BONUS

/**
 * @swagger
 * /admin/delete/user/{id}:
 *   delete:
 *     summary: Supprimer un utilisateur
 *     tags:
 *       - Admin
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID de l'utilisateur à supprimer
 *     responses:
 *       200:
 *         description: Utilisateur supprimé avec succès
 *       404:
 *         description: Utilisateur non trouvé
 *       500:
 *         description: Erreur serveur
 */
routerUser.delete('/admin/delete/user/:id', UserController.deleteUserByAdmin);

/**
 * @swagger
 * /admin/put/user/{id}:
 *   put:
 *     summary: Modifier un utilisateur
 *     tags:
 *       - Admin
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID de l'utilisateur à modifier
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nom:
 *                 type: string
 *               prenom:
 *                 type: string
 *               email:
 *                 type: string
 *               mot_de_passe:
 *                 type: string
 *               roles:
 *                 type: array
 *             required:
 *               - nom
 *               - prenom
 *               - email
 *               - mot_de_passe
 *     responses:
 *       200:
 *         description: Utilisateur modifié avec succès
 *       404:
 *         description: Utilisateur non trouvé
 *       500:
 *         description: Erreur serveur
 */
routerUser.put('/admin/put/user/:id', UserController.putUserByAdmin);

module.exports = routerUser;
