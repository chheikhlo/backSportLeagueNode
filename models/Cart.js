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

    quantite: Number,
    
    confirm_panier: Boolean
});

module.exports = Members = mongoose.model("Members", CartSchema, "members")

