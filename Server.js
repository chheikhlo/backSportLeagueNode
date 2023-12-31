const express = require('express')
const bodyParser = require('body-parser')
const port = 9000
const app = express()
const connect = require('./database/conn')
const cors = require('cors')
const swaggerUi = require('swagger-ui-express');
const swaggerConf = require('./swaggerConfig'); 

app.use(bodyParser.json())
app.use(cors())
app.use(express.json())

const routesProduct = require('./routes/ProductRoutes')
const routesUser = require('./routes/UserRoutes')

connect()

app.use('/products', routesProduct)
app.use('', routesUser)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerConf));

app.listen(port, () => {
    console.log(`Serveur à l'écoute sur le port ${port}`)
});
