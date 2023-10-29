const mongoose = require('mongoose')

const CartSchema = new mongoose.Schema({

    utilisateur_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },

    produit_id: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
    }],
    confirm_panier: Boolean
});

module.exports = Cart = mongoose.model("Cart", CartSchema, "carts")
