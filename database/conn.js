require('dotenv').config();
const mongoose = require('mongoose')

const connect = async () => {
    try {
        mongoose.set('strictQuery', true)
        await mongoose.connect(process.env.ATLAS)
        console.log("Connexion reussie")
    }
    catch (err) {
        console.log(err.message)
        process.exit(1)
    }
}

module.exports = connect