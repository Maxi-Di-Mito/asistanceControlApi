/**
 * Created by maximiliano.dimito on 8/25/2016.
 */
var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;


var Asistance = new Schema({
    date: Date,
    person: {type: Schema.ObjectId, ref : "Person"}
});

module.exports = mongoose.model('Asistance', Asistance);