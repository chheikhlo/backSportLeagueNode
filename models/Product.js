const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    nom: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    sport: {
        type: String,
        required: true,
    },
    quantite: {
        type: Number,
        required: true,
    },
    prix: {
        type: Number,
        required: true, 
    }
});

module.exports = Products = mongoose.model("Products", ProductSchema, "products");