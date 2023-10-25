const mongoose = require('mongoose')

const MemberSchema = new mongoose.Schema({

    utilisateur_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    panier: [
        {
            produit_id: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Product'
            },
            quantite: Number
        }
    ],
    confirm_panier: Boolean
});

module.exports = Members = mongoose.model("Members", MemberSchema, "members")

