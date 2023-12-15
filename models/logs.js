

//const mongoose = require('mongoose');
const mongoose = require("./connection");

const logSchema = new mongoose.Schema({
    title:  { type: String, required: true },
    entry:  { type: String, required: true },
    // timestamps: {type: String, required: true},
    shipIsBroken: Boolean
},{timestamps: true});

const Log = mongoose.model('Log', logSchema);  

module.exports = Log;  