/**
 * Created by Andy Feng on 6/27/18
 */
// -----------------
// Require Resources
// -----------------
let mongoose = require('mongoose');
let Met = mongoose.model('Mets');

// --------------
// Helper Methods
// --------------
function incrementStat(type, cb) {
    Met.findOne({}).exec().then(function (result) {
        if (result) {
            switch (type) {
                case "page":
                    result.page++;
                    break;
                case "show":
                    result.show++;
                    break;
                case "sub":
                    result.sub++;
                    break;
                case "ham":
                    result.ham++;
                    break;
                case "linkedIn":
                    result.linkedIn++;
                    break;
                case "gitHub":
                    result.gitHub++;
                    break;
                case "inst":
                    result.inst++;
                    break;
                case "email":
                    result.email++;
                    break;
                case "bitworth":
                    result.bitworth++;
                    break;
                case "wordd":
                    result.wordd++;
                    break;
            }
            result.save().then(function () {
                cb(result);
            }, function (err) {
                console.log("[ mets ] Failed to save existing metric ".red, err);
            });
        }
    }, function (err) {
        console.log("[ mets ] Failed to find one metrics ".red, err);
    });
}

// --------------
// Public Methods
// --------------
module.exports = (function () {
    return {

        allMetrics: function (req, res) {
            Met.findOne({}).exec().then(function (result) {
                if (result) {
                    result.page++;
                    result.save().then(function () {
                        res.json(result);
                    }, function (err) {
                        console.log("[ mets ] Failed to save existing metric ".red, err);
                    });
                } else {
                    let newMet = new Met;
                    newMet.save().then(function () {
                        res.json(newMet);
                    }, function (err) {
                        console.log("[ mets ] Failed to save new metric ".red, err);
                    });
                }
            }, function (err) {
                console.log("[ mets ] Failed to find one metrics ".red, err);
            });
        },

        incShow: function (req, res) {
            incrementStat("show", function (result) {
                res.json(result);
            });
        },

        incSub: function (req, res) {
            incrementStat("sub", function (result) {
                res.json(result);
            });
        },

        incHam: function (req, res) {
            incrementStat("ham", function (result) {
                res.json(result);
            });
        },

        incLI: function (req, res) {
            incrementStat("linkedIn", function (result) {
                res.json(result);
            });
        },

        incGH: function (req, res) {
            incrementStat("gitHub", function (result) {
                res.json(result);
            });
        },

        incINST: function (req, res) {
            incrementStat("inst", function (result) {
                res.json(result);
            });
        },

        incEmail: function (req, res) {
            incrementStat("email", function (result) {
                res.json(result);
            });
        },

        incBitworth: function (req, res) {
            incrementStat("bitworth", function (result) {
                res.json(result);
            });
        },

        incWordd: function (req, res) {
            incrementStat("wordd", function (result) {
                res.json(result);
            });
        }


    }
})();













