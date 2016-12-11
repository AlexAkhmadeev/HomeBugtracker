/**
 * Created by ��������� on 20.11.2016.
 */
var homeApp = angular.module('homeApp', ["ngRoute"]).config(function($routeProvider) {

    /* ������� */
    $routeProvider.when('/main',
        {
            templateUrl: 'views/main.html',
            controller: 'MenuCtrl'
        });
    /* /������� */


    /* ������� */
    $routeProvider.when('/piano/all',
        {
            templateUrl: 'views/piano/allBeatsView.html',
            controller: 'PianoCtrl'
        });
    $routeProvider.when('/piano/add',
        {
            templateUrl: 'views/piano/addBeatsView.html',
            controller: 'PianoCtrl'
        });
    /* /������� */


    /* ��������� */
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
    /* /��������� */


    /* ���������� */
    $routeProvider.when('/sport/exercises',
        {
            templateUrl: 'views/sport/allExercisesView.html',
            controller: 'SportCtrl'
        });
    /* /���������� */

    $routeProvider.otherwise({redirectTo: '/main'});

});