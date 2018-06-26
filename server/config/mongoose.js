/**
 * Created by peachteaboba on 8/24/17
 */

// -------------------------------------
// Require Resources / Declare Variables
// -------------------------------------
let fs = require('fs');
let models_path = __dirname + '/../models';
let mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/portfolio_site_new").then(function () {
    console.log("[ mongoose ] Successfully connected to mongoose ( localhost )".green);
});

// ---------------------------------------------------------
// Read all of the files in the models_path and for each one
// ---------------------------------------------------------
fs.readdirSync(models_path).forEach(function (file) {
    if (file.indexOf('.js') > 0) {
        require(models_path + '/' + file);
    }
});
