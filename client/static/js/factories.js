/**
 * Created by andyf on 6/26/18
 */

app.factory('MetricFactory', function($http) {
    let factory = {};

    factory.index = function(callback) {
        $http.get('/allMetrics').then(function(output) {
            callback(output.data);
        });
    };

    factory.incPage = function(callback) {
        $http.get('/incPage').then(function(output) {
            callback(output.data);
        })
    };

    factory.incShow = function(callback) {
        $http.get('/incShow').then(function(output) {
            callback(output.data);
        })
    };

    factory.incSub = function(callback) {
        $http.get('/incSub').then(function(output) {
            callback(output.data);
        })
    };

    factory.incHam = function(callback) {
        $http.get('/incHam').then(function(output) {
            callback(output.data);
        })
    };

    factory.incLI = function(callback) {
        $http.get('/incLI').then(function(output) {
            callback(output.data);
        })
    };

    factory.incGH = function(callback) {
        $http.get('/incGH').then(function(output) {
            callback(output.data);
        })
    };

    factory.incINST = function(callback) {
        $http.get('/incINST').then(function(output) {
            callback(output.data);
        })
    };

    factory.incEmail = function(callback) {
        $http.get('/incEmail').then(function(output) {
            callback(output.data);
        })
    };

    factory.incBitworth = function(callback) {
        $http.get('/incBitworth').then(function(output) {
            callback(output.data);
        })
    };

    factory.incWordd = function(callback) {
        $http.get('/incWordd').then(function(output) {
            callback(output.data);
        })
    };

    return factory;
});