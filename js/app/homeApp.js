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
    $routeProvider.when('/piano/stat',
        {
            templateUrl: 'views/piano/statisticsView.html',
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


    /* Упражнения */
    $routeProvider.when('/sport/exercises',
        {
            templateUrl: 'views/sport/exercisesListView.html',
            controller: 'SportCtrl'
        });
    $routeProvider.when('/sport/done',
        {
            templateUrl: 'views/sport/doneExercisesView.html',
            controller: 'SportCtrl'
        });
    $routeProvider.when('/sport/add',
        {
            templateUrl: 'views/sport/addExerciseView.html',
            controller: 'SportCtrl'
        });
    /* /Упражнения */



    /* Справочник */
    $routeProvider.when('/dir/select',
        {
            templateUrl: 'views/directory/selectDirectoryView.html',
            controller: 'DirectoryCtrl'
        });
    /* /Справочник */

    $routeProvider.otherwise({redirectTo: '/main'});

}).run(function($rootScope, $templateCache) {
    $rootScope.$on('$routeChangeStart', function(event, next, current) {

        //console.log(next["templateUrl"])

    });
});

homeApp.directive('hsHeader', function() {
        return {
            restrict: 'AECM',
            templateUrl: 'app/general/templates/_header.html',
            transinclude: true,

            replace: true,
            controller: function($scope, $element) {
                alert(1111);
            }
        }
    });
