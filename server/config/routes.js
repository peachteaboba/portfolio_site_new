/**
 * Created by Andy Feng on 6/27/18
 */
// -----------------
// Require Resources
// -----------------
let metrics = require('../controllers/metrics');

// -------------
// Define Routes
// -------------
module.exports = function (app, auth, path) {

    // =========================================================================
    // =========================== Metrics Routes ==============================
    // =========================================================================
    app.get('/allMetrics', function (req, res) {
        metrics.allMetrics(req, res);
    });

    app.get('/incShow', function (req, res) {
        metrics.incShow(req, res);
    });

    app.get('/incSub', function (req, res) {
        metrics.incSub(req, res);
    });

    app.get('/incHam', function (req, res) {
        metrics.incHam(req, res);
    });

    app.get('/incLI', function (req, res) {
        metrics.incLI(req, res);
    });

    app.get('/incGH', function (req, res) {
        metrics.incGH(req, res);
    });

    app.get('/incINST', function (req, res) {
        metrics.incINST(req, res);
    });

    app.get('/incEmail', function (req, res) {
        metrics.incEmail(req, res);
    });

    app.get('/incBitworth', function (req, res) {
        metrics.incBitworth(req, res);
    });

    app.get('/incWordd', function (req, res) {
        metrics.incWordd(req, res);
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
