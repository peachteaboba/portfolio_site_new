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
    page: Number,
    show: Number,
    sub: Number,
    ham: Number,
    linkedIn: Number,
    gitHub: Number,
    inst: Number,
    email: Number,
}, {timestamps: true});

// -------------
// Return Schema
// -------------
module.exports = mongoose.model('Mets', metricSchema);




