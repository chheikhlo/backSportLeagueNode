const Users = require('../models/User')
const Product = require('../models/Product')
const Cart = require('../models/Cart')
// Membre :
// - loginUser()
const loginUser = (req, res) => {
    const email = req.body.email;
    const password = req.body.mot_de_passe;
    Users.findOne({ 'email': email, 'mot_de_passe': password })
        .then(user => {
            if (!user) {
                return res.status(404).json({ notFound: 'Utilisateur non trouvé' });
            }
            res.status(200).json(user)
            console.log(user)
        })
        .catch(err => {
            console.error(err);
            res.status(500).json({ error: 'Erreur de serveur' });
        });
}

const registerUser = (req, res) => {
    const nom = req.body.nom;
    const prenom = req.body.prenom;
    const email = req.body.email;
    const telephone = req.body.telephone;
    const mot_de_passe = req.body.mot_de_passe;

    const newUser = new Users({
        nom,
        prenom,
        telephone,
        email,
        mot_de_passe,
    })
    newUser.save()
        .then(user => {
            res.status(200).json({ message: 'utilisateur enregistré!' })
            console.log(user)
        })
        .catch(err => {
            console.error(err);
            res.status(400).json({ error: 'Erreur client' });
        });
}
// - addProductToHisBasket()
const addCart = (req, res) => {
    const utilisateur_id = req.body.utilisateur_id;
    const produit_id = req.body.produit_id;
    const quantite = req.body.quantite;
    const confirm_panier = req.body.confirm_panier;
    const newPanier = new Cart({
        utilisateur_id,
        produit_id,
        quantite,
        confirm_panier
    })
    newPanier.save().then(cart => {
        res.status(200).json(cart)
        console.log(cart)
    })
        .catch(err => console.error('Panier non trouvé:', err))
}
// - addProductToHisBasket()
// const addProductToHisBasket = async (req, res) => {
//     try {
//         const membersWithProducts = await Users.find().populate('Cart'); // Utilisez la méthode populate pour obtenir les produits dans le panier de chaque membre.
//         const filteredMembers = membersWithProducts.filter(member => member.cart.length > 0);

//         res.json(filteredMembers);
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ error: 'Une erreur est survenue lors de la récupération des membres avec des produits dans leur panier.' });
//     }
// }

// // Bonus
// - putUser()
// - deleteUser()

//admin manage product :
const addProduct = (req, res) => {

    const nom = req.body.nom;
    const image = req.body.image;
    const sport = req.body.sport;
    const quantite = req.body.quantite;
    const prix = req.body.prix;

    const newProduct = new Product({
        nom,
        image,
        sport,
        quantite,
        prix,
    })

    newProduct.save()
        .then(user => {
            res.status(200).json({ message: 'Produit ajouter!' })
            console.log(user)
        })
        .catch(err => {
            console.error(err);
            res.status(400).json({ error: 'Erreur client' });
        });
}


const putProduct = (req, res) => {

    const id = req.params.id;

    Product.findOneAndUpdate({ _id: id }, req.body)
        .then(product => {
            res.status(200).json(product)
            console.log(product)
        })
        .catch(err => {
            res.status(404).json({ notFound: 'Produit non trouvé' })
        })
}

const deleteProduct = (req, res) => {

    const id = req.params.id;

    Product.findByIdAndRemove(id)
        .then(product => {
            res.status(200).json({ message: 'Produit supprimé!' })
            console.log(product)
        })
        .catch(err => {
            console.error(err);
            res.status(500).json({ error: 'Erreur de serveur' });
        });
}

// ----------Bonus----
//admin manage users :

const putUserByAdmin = (req, res) => {

    const id = req.params.id;

    Users.findOneAndUpdate({ _id: id }, req.body)
        .then(user => {
            res.status(200).json(user)
            console.log(user)
        })
        .catch(err => {
            res.status(404).json({ notFound: 'Produit non trouvé' })
        })
}

const deleteUserByAdmin = (req, res) => {

    const id = req.params.id;

    Users.findByIdAndRemove(id)
        .then(user => {
            res.status(200).json({ message: 'Produit supprimé!' })
            console.log(user)
        })
        .catch(err => {
            console.error(err);
            res.status(500).json({ error: 'Erreur de serveur' });
        });
}

module.exports = { loginUser, registerUser, addProduct, putProduct, deleteProduct, deleteUserByAdmin, putUserByAdmin };
