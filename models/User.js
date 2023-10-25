const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({

    nom: String,
    prenom: String,
    telephone: String,
    email: String,
    mot_de_passe: String

});

module.exports = Users = mongoose.model("Users", UserSchema, "users")

