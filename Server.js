const express = require('express')
const bodyParser = require('body-parser')
const port = 9000
const app = express()
const connect = require('./database/conn')
const cors = require('cors')
// Ajout des modules du swagger
const swaggerUi = require('swagger-ui-express');
const swaggerConf = require('./swaggerConfig'); 

// Middleware
app.use(bodyParser.json())
app.use(cors())
app.use(express.json())

// Importation de mes routes
const routesProduct = require('./routes/ProductRoutes')
const routesUser = require('./routes/UserRoutes')

// connexion database
connect()

app.use('/products', routesProduct)
app.use('/user', routesUser)
// Pour le swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerConf));


app.listen(port, () => {
    console.log(`Serveur à l'écoute sur le port ${port}`)
});
