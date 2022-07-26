const express = require('express');
const bodyParser = require('body-parser');
const config = require('config');
const cors = require('cors')
const consign = require('consign');
const dotenv = require('dotenv')

dotenv.config({path: '.env-local'})

module.exports = () => {
    const app = express();

    app.set('port', process.env.PORT || config.get('server.port'));

    app.use(bodyParser.json());
    app.use(cors({origin: true, credentials: true}))

    consign({cwd: 'api'})
        .then('data')
        .then('connector')
        .then('services')
        .then('controllers')
        .then('routes')
        .into(app);


  return app;
};