/**
 * Created by peachteaboba on 6/26/18
 */

// -----------------
// Require Resources
// -----------------
let mongoose = require('mongoose');
let Schema = mongoose.Schema;

// -------------
// Define Schema
// -------------
let metricSchema = new Schema({
    page: {type: Number, default: 1},
    show: {type: Number, default: 1},
    sub: {type: Number, default: 1},
    ham: {type: Number, default: 1},
    linkedIn: {type: Number, default: 1},
    gitHub: {type: Number, default: 1},
    inst: {type: Number, default: 1},
    email: {type: Number, default: 1},
    bitworth: {type: Number, default: 1},
    wordd: {type: Number, default: 1}
}, {timestamps: true});

// -------------
// Return Schema
// -------------
module.exports = mongoose.model('Mets', metricSchema);




