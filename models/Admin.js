const mongoose = require('mongoose')

const AdminSchema = new mongoose.Schema({

    utilisateur_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});

module.exports = Admins = mongoose.model("Admins", AdminSchema, "admin")

