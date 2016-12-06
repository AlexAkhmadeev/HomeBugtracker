/**
 * Created by Александр on 20.11.2016.
 */
var homeApp = angular.module('homeApp', ["ngRoute"]).config(function($routeProvider) {

    /* Главная */
    $routeProvider.when('/main',
        {
            templateUrl: 'views/main.html',
            controller: 'MenuCtrl'
        });
    /* /Главная */


    /* Клавиши */
    $routeProvider.when('/piano',
        {
            templateUrl: 'views/piano.html',
            controller: 'PianoCtrl'
        });
    /* /Клавиши */


    /* Багтрекер */
    $routeProvider.when('/bugtracker/select',
        {
            templateUrl: 'views/bugtracker/selectTicketView.html',
            controller: 'BugTrackerCtrl'
        });
    $routeProvider.when('/bugtracker/create',
        {
            templateUrl: 'views/bugtracker/createTicketView.html',
            controller: 'BugTrackerCtrl'
        });
    $routeProvider.when('/bugtracker/current',
        {
            templateUrl: 'views/bugtracker/currentTicketView.html',
            controller: 'BugTrackerCtrl'
        });
    /* /Багтрекер */


    $routeProvider.otherwise({redirectTo: '/main'});

});