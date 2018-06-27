/**
 * Created by andyf on 6/26/18
 */

let app = angular.module('app', ['ngRoute', 'duScroll']);

function easeInOutQuart(t) {
    return t<.5 ? 8*t*t*t*t : 1-8*(--t)*t*t*t
}
app.value('duScrollEasing', easeInOutQuart);

// Configure Angular Routes
app.config(["$routeProvider", "$locationProvider", function ($routeProvider, $locationProvider) {

    // Define routes
    $routeProvider
        .when('/', {
            templateUrl: 'static/partials/main.html',
            controller: 'mainController'
        })
        .otherwise({
            redirectTo: '/'
        });

    // Get rid of the '/#!/' in url
    $locationProvider.html5Mode(true);
    $locationProvider.hashPrefix('');

}]);