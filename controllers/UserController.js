const Users = require('../models/User')
const Product = require('../models/Product')
const Cart = require('../models/Cart')

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

const addProductToHisBasket = async (req, res) => {

    const { utilisateur_id, produit_id } = req.body;

    const user = await Users.findById(utilisateur_id);
    const product = await Product.findById(produit_id);

    if (!user) {
        return res.status(404).json({ message: 'Utilisateur non trouvé' });
    }

    if (!product) {
        return res.status(404).json({ message: 'Produit non trouvé' });
    }

    user.total_prix_to_pay += product.prix;
    product.quantite = product.quantite - 1;

    if(product.quantite === 0){
        product.deleteOne({quantite: 0})
    }else{
        product.save()
    }

    user.save()

    const newCart = new Cart({
        utilisateur_id: utilisateur_id,
        produit_id: produit_id,
        confirm_panier: false,
    });

    res.status(201).json(newCart.save());
};

const deleteCartUser = (req, res) => {
    const id = req.params.id;

    Users.findOne({ "_id": id })
        .then(user => {
            if (!user) {
                return res.status(404).json({ error: 'Utilisateur non trouvé' });
            }
            Cart.deleteMany({ "utilisateur_id": user._id })
                .then(deletedCart => {
                    res.status(200).json({ message: "Panier(s) Supprimé(s)" });

                    user.total_prix_to_pay = 0;
                    user.save();

                    console.log(deletedCart);
                })
                .catch(err => {
                    console.error(err);
                    res.status(500).json({ error: 'Erreur de serveur lors de la suppression du panier' });
                });
        })
        .catch(err => {
            console.error(err);
            res.status(400).json({ error: 'Erreur client lors de la recherche de l\'utilisateur' });
        });
};

const getCartUser = async (req, res) => {
    const id = req.params.id;

    const cart = await Cart.find({ "utilisateur_id": id });

    if (cart.length === 0) {
        return res.status(404).json({ notFound: 'Produits non trouvés!' });
    }

    const productIds = cart.map(cart => cart.produit_id);
    const products = await Product.find({ "_id": { $in: productIds } });

    if (products.length === 0) {
        return res.status(404).json({ notFound: 'Produits non trouvés!' });
    }

    res.status(200).json(products);
}

const getUsers = (req, res) => {
    Users.find()
        .then(users => {
            if (users.length > 0) {
                res.status(200).json(users);
                console.log(users);
            } else {
                res.status(404).json({ notFound: 'Aucun membre trouvé ' });
            }
        })
        .catch(err => {
            res.status(500).json({ error: err.message });
        })
}

const deleteUsers = (req, res) => {
    const id = req.params.id;

    Users.findByIdAndRemove(id)
        .then(product => {
            res.status(200).json({ message: 'Utilisateur supprimé!' })
            console.log(product)
        })
        .catch(err => {
            console.error(err);
            res.status(500).json({ error: 'Erreur de serveur' });
        });
}

const putUser = (req, res) => {
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
            res.status(200).json({ message: 'Utilisateur supprimé!' })
            console.log(user)
        })
        .catch(err => {
            console.error(err);
            res.status(500).json({ error: 'Erreur de serveur' });
        });
}

module.exports = { loginUser, putUser, deleteCartUser, deleteUsers, getUsers, addProduct, registerUser, putProduct, deleteProduct, deleteUserByAdmin, putUserByAdmin, addProductToHisBasket, getCartUser };
