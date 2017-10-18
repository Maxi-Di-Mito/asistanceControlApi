/**
 * Created by maximiliano.dimito on 2/2/2017.
 */
const express = require('express');
const fs = require('fs');
const routerApi = express.Router();
const errorHandler = require('./util/errorHandler');
const loggerCreator = require('../server/util/logger');
//import route from './api/personRouter';


routerApi.get('/', (req, res) => {
    res.json({ message: 'Welcome to our api!' });
});

fs.readdirSync(__dirname+'/routes')
    .forEach( file => {
        const filePath = `./routes/${file}`;
        require(filePath)(routerApi,loggerCreator(file));
});

routerApi.use(errorHandler);

module.exports = routerApi;