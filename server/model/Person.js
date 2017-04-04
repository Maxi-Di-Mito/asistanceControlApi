/**
 * Created by maximiliano.dimito on 8/25/2016.
 */
import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const Person = new Schema({
    name: String,
    lastName: String
},{
    collection:"Person"
});

export default mongoose.model('Person', Person);