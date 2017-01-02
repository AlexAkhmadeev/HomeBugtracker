module.exports = function(homeApp) {
    /**
     * Роутер
     */
    homeApp.config(function($stateProvider, $urlRouterProvider) {

        $stateProvider
            // Главная
            .state('main', {
                url: '/main',
                template: '<ng-main-view></ng-main-view>',
                controller: function () {
                    console.log('Переход на createTicketView');
                }
            })

            // Багтрекер
            .state('createTicket', {
                url: '/bugtracker/create',
                templateUrl: 'app/Bugtracker/createTicketView.html',
                controller: function () {
                    console.log('Переход на createTicketView');
                }
            })
            .state('ticketList', {
                url: '/bugtracker/list',
                template: '<ng-ticket-list></ng-ticket-list>',
                controller: function () {
                    console.log('Переход на selectTicketView');
                }
            })
            .state('currentTicket', {
                url: '/bugtracker/current',
                template: '<ng-current-ticket></ng-current-ticket>',
                controller: function () {
                    console.log('Переход на currentTicketView');
                }
            })

            // Справочник
            .state('directory', {
                url: '/directory',
                templateUrl: 'app/Directory/directoryView.html',
                controller: function () {
                    console.log('Переход на directoryView');
                }
            });



        $urlRouterProvider.otherwise('/main');
        $urlRouterProvider.when('/bugtracker/list', function($state, $stateParams) {
            $state.go('main');
            alert(1);
        });
        $urlRouterProvider.when('ticketList', function($state, $stateParams) {
            $state.go('main');
            alert(1);
        });

    }); // /config


};