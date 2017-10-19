/**
 * Created by maximiliano.dimito on 1/10/2017.
 */
const express = require("express");
const routerApi = require('./RouterApi');
const serverRender =require('./serverRender');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

app.use( (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept,");
    res.header("Access-Control-Expose-Headers", "X-Total-Count");
    
    next();
});
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//app.use(express.static(path.join(__dirname, '/../www/static/')));

app.use('/api',routerApi);

//app.use(serverRender);

const port = process.env.PORT || 9001;

app.listen(port, () => {
    console.log("Andando en "+port);
});

