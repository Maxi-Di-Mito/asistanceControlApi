/**
 * Created by maximiliano.dimito on 2/2/2017.
 */
const mongoose = require('mongoose');
const usuario = process.env.dbUser || "asistanceChecker";
const pass = process.env.dbPass || "201090";

mongoose.connect(`mongodb://${usuario}:${pass}@ds017636.mlab.com:17636/asistancechecker`).then(() => {
    require('./server');
}).catch((err) => {
    console.log(err);
    console.log("NO CONECTO");
});