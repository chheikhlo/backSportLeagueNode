const express = require('express')
const bodyParser = require('body-parser')
const port = 9000
const app = express()
const connect = require('./database/conn')
const cors = require('cors')

// Middleware
app.use(bodyParser.json())
app.use(cors())
app.use(express.json())


// Importation de mes routes
const routesProduct = require('./routes/ProductRoutes')
// const routesUser = require('./routes/UserRoutes')

// connexion database
connect()

// Utilisez les routes
app.use('/products', routesProduct)
// app.use('/user', routesUser)


app.listen(port, () => {
    console.log(`Serveur à l'écoute sur le port ${port}`)
});
