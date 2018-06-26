

let users = require('./../controllers/users');

// -------------
// Define Routes
// -------------
module.exports = function (app, auth, path) {


    // USER ROUTES ----------------------------------------------------------------------------
    // new hotness ----------------------------------------------------------------------------
    app.get('/allMetrics', function(req, res) {
        users.indexM(req, res);
    });
    app.get('/initMetrics', function(req, res) {
        users.indexI(req, res);
    });
    app.get('/incPage', function(req, res) {
        users.incPage(req, res);
    });
    app.get('/incShow', function(req, res) {
        users.incShow(req, res);
    });
    app.get('/incSub', function(req, res) {
        users.incSub(req, res);
    });
    app.get('/incHam', function(req, res) {
        users.incHam(req, res);
    });
    app.get('/incLI', function(req, res) {
        users.incLI(req, res);
    });
    app.get('/incGH', function(req, res) {
        users.incGH(req, res);
    });
    app.get('/incINST', function(req, res) {
        users.incINST(req, res);
    });
    app.get('/incEmail', function(req, res) {
        users.incEmail(req, res);
    });

    // * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
    // * * * * * * * * * * * * * * *   Web Routes  * * * * * * * * * * * * * * *
    // * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *

    // =========================================================================
    // =========================== Angular Routes ==============================
    // =========================================================================
    app.get('/', function (req, res) {
        res.set('Content-Encoding', 'gzip');
        res.sendFile(path.resolve('client/index.html'));
    });

};
