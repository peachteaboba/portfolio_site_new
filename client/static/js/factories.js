/**
 * Created by andyf on 6/26/18
 */


// UserFactory ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: UserFactory
app.factory('MetricFactory', function($http) {
    let factory = {};
    let metrics = [];

    factory.index = function(callback) {
        $http.get('/allMetrics').then(function(output) {
            metrics = output;
            callback(metrics);
        });
    };

    factory.indexInit = function(callback) {
        $http.get('/initMetrics').then(function(output) {
            metrics = output;
            callback(metrics);
        })
    };

    factory.incPage = function(callback) {
        $http.get('/incPage').then(function(output) {
            metrics = output;
            callback(metrics);
        })
    };

    factory.incShow = function(callback) {
        $http.get('/incShow').then(function(output) {
            metrics = output;
            callback(metrics);
        })
    };

    factory.incSub = function(callback) {
        $http.get('/incSub').then(function(output) {
            metrics = output;
            callback(metrics);
        })
    };

    factory.incHam = function(callback) {
        $http.get('/incHam').then(function(output) {
            metrics = output;
            callback(metrics);
        })
    };

    factory.incLI = function(callback) {
        $http.get('/incLI').then(function(output) {
            metrics = output;
            callback(metrics);
        })
    };

    factory.incGH = function(callback) {
        $http.get('/incGH').then(function(output) {
            metrics = output;
            callback(metrics);
        })
    };

    factory.incINST = function(callback) {
        $http.get('/incINST').then(function(output) {
            metrics = output;
            callback(metrics);
        })
    };

    factory.incEmail = function(callback) {
        $http.get('/incEmail').then(function(output) {
            metrics = output;
            callback(metrics);
        })
    };

    return factory;
});