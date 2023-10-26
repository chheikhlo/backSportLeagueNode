const Product = require('../models/Product');

const getProducts = (req, res) => {
    Product.find()
        .then(product => {
            res.status(200).json(product)
            console.log(product)
        })
        .catch(err => {
            res.status(404).json({ notFound: 'Produit non trouvé!' })
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