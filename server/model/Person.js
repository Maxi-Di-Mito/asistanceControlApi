/**
 * Created by maximiliano.dimito on 8/25/2016.
 */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Person = new Schema({
    name: String,
    lastName: String
},{
    collection:"Person"
});

module.exports = mongoose.model('Person', Person);