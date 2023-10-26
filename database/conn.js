require('dotenv').config();
const mongoose = require('mongoose')

const connect = async () => {
    try {
        mongoose.set('strictQuery', true)
        await mongoose.connect('mongodb+srv://ndeye:lsa_location@cluster0.qvygd7l.mongodb.net/?retryWrites=true&w=majority')
        console.log("Connexion reussie")
    }
    catch (err) {
        console.log(err.message)
        process.exit(1)
    }
}

module.exports = connect