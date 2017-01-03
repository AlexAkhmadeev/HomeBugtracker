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
            templateUrl: 'views/piano/_allBeats.html',
            controller: 'PianoCtrl'
        });
    $routeProvider.when('/piano/add',
        {
            templateUrl: 'views/piano/_addBeats.html',
            controller: 'PianoCtrl'
        });
    $routeProvider.when('/piano/stat',
        {
            templateUrl: 'views/piano/_stat.html',
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
            templateUrl: 'views/bugtracker/_createTicket.html',
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
            templateUrl: 'views/sport/_allEx.html',
            controller: 'SportCtrl'
        });
    $routeProvider.when('/sport/done',
        {
            templateUrl: 'views/sport/_doneEx.html',
            controller: 'SportCtrl'
        });
    $routeProvider.when('/sport/add',
        {
            templateUrl: 'views/sport/_addEx.html',
            controller: 'SportCtrl'
        });
    /* /���������� */



    /* ���������� */
    $routeProvider.when('/dir/select',
        {
            templateUrl: 'views/directory/selectDirectoryView.html',
            controller: 'DirectoryCtrl'
        });
    /* /���������� */

    $routeProvider.otherwise({redirectTo: '/main'});

}).run(function($rootScope, $templateCache) {
    $rootScope.$on('$routeChangeStart', function(event, next, current) {

        //console.log(next["templateUrl"])

    });
});

homeApp.directive('hsHeader', function() {
        return {
            restrict: 'AECM',
            templateUrl: 'app/general/templates/_title.html',
            transinclude: true,

            replace: true,
            controller: function($scope, $element) {
                alert(1111);
            }
        }
    });
