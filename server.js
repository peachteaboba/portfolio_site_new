/**
 * Created by peachteaboba on 8/24/17.
 */

// ---------------------------------------------------------------
// ------------------------------------------------------- Require
// ---------------------------------------------------------------
let express = require('express');
let port = process.env.PORT || 9000;
let path = require('path');
let bodyParser = require('body-parser');
require('colors');

// ---------------------------------------------------------------
// --------------------------------------------------------- HTTPS
// ---------------------------------------------------------------
const env = require('./server/config/env');
const fs = require('fs');
const http = require('http');
const https = require('https');
let options = {};

// ---------------------------------------------------------------
// ----------------------------------------------------------- DEV
// ---------------------------------------------------------------
if (env.production_server) {
    options = {
        cert: fs.readFileSync('./sslcert/fullchain.pem'),
        key: fs.readFileSync('./sslcert/privkey.pem')
    };
}

// ---------------------------------------------------------------
// --------------------------------------------------------- Setup
// ---------------------------------------------------------------
let app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({limit: '100mb'}));
app.use(bodyParser.urlencoded({limit: '100mb', extended: true, parameterLimit: 1000000}));
app.use(express.static(path.join(__dirname, '/client')));
app.use(express.static("./bower_components"));

// ---------------------------------------------------------------
// ------------------------------------------------------ Database
// ---------------------------------------------------------------
require('./server/config/mongoose');

// ---------------------------------------------------------------
// -------------------------------------------------------- Routes
// ---------------------------------------------------------------
require('./server/config/routes')(app);

// ---------------------------------------------------------------
// -------------------------------------------------------- Listen
// ---------------------------------------------------------------
let server;
if (env.production_server) {
    server = https.createServer(options, app).listen(port, function () {
        console.log("-----------------------------------------------------------".blue);
        console.log("------------ It's over port: 9000!!! ( https ) ------------".blue);
        console.log("-----------------------------------------------------------".blue);
    });
} else {
    server = http.createServer(app).listen(port, function () {
        console.log("-----------------------------------------------------------".blue);
        console.log("------------ It's over port: 9000!!! ( http ) -------------".blue);
        console.log("-----------------------------------------------------------".blue);
    });
}
