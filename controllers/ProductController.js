const Product = require('../models/Product');

const getProducts = (req, res) => {
    Product.find({ quantite: { $ne: 0 } })
        .then(products => {
            if (products.length > 0) {
                res.status(200).json(products);
                console.log(products);
            } else {
                res.status(404).json({ notFound: 'Aucun produit trouvé avec une quantité différente de zéro' });
            }
        })
        .catch(err => {
            res.status(500).json({ error: err.message });
        })
}

const getProductsById = (req, res) => {
    Product.find({ "_id": req.params.id })
        .then(product => {
            res.status(200).json(product)
            console.log(product)
        })
        .catch(err => {
            res.status(404).json({ notFound: 'Produit non trouvé' })
        })
}

module.exports = { getProducts, getProductsById }
