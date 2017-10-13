/**
 * Created by maximiliano.dimito on 2/2/2017.
 */
const express = require('express');
const fs = require('fs');
const routerApi = express.Router();
const errorHandler = require('./util/errorHandler');
//import route from './api/personRouter';


routerApi.get('/', (req, res) => {
    res.json({ message: 'Welcome to our api!' });
});

fs.readdirSync(__dirname+'/api')
    .forEach( file => {
        const filePath = `./api/${file}`;
        require(filePath)(routerApi);
});

routerApi.use(errorHandler);

module.exports = routerApi;