const swaggerJsdoc = require('swagger-jsdoc');

const options = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'API LSA Location',
            version: '1.0.0',
            description: "Documentation de l'API de LSA Location",
        },
        servers: [
            {
                url: 'http://10.0.50.27:9006',
                description: 'Serveur local',
            },
        ],
    },
    apis: ['./routes/*.js'],
};


module.exports = swaggerJsdoc(options);
