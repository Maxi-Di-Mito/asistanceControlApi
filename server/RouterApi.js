/**
 * Created by maximiliano.dimito on 2/2/2017.
 */
import express from 'express';
import fs from 'fs';
const routerApi = express.Router();
import errorHandler from './util/errorHandler';
//import route from './api/personRouter';


routerApi.get('/', (req, res) => {
    res.json({ message: 'Welcome to our api!' });
});

fs.readdirSync(__dirname+'/api')
    .forEach( file => {
        const filePath = `./api/${file}`;
        require(filePath).default(routerApi);
});

routerApi.use(errorHandler);

export default routerApi;