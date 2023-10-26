const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({

    nom: String,
    image: String,
    sport: String,
    quantite_disponible: Number,
    prix_location: Number

});


module.exports = Products = mongoose.model("Products", ProductSchema, "products")

