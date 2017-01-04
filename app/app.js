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
                template: '<ng-create-ticket></ng-create-ticket>'
            })
            .state('ticketList', {
                url: '/bugtracker/list',
                template: '<ng-ticket-list></ng-ticket-list>'
            })
            .state('currentTicket', {
                url: '/bugtracker/current',
                template: '<ng-current-ticket></ng-current-ticket>'
            })

            // Справочник
            .state('dirAdd', {
                url: '/directory/add',
                template: '<ng-dir-add></ng-dir-add>'
            })
            .state('dirSel', {
                url: '/directory/select',
                template: '<ng-dir-select></ng-dir-select>'
            })


            // Клавиши
            .state('beats', {
                url: '/keyboard/beats',
                template: '<ng-all-beats></ng-all-beats>'
            })
            .state('statistics', {
                url: '/keyboard/stat',
                template: '<ng-stat></ng-stat>'
            })
            .state('addBeats', {
                url: '/keyboard/add',
                template: '<ng-add-beats></ng-add-beats>'
            })

            // Спорт
            .state('allEx', {
                url: '/sport/all',
                template: '<ng-all-ex></ng-all-ex>'
            })
            .state('doneEx', {
                url: '/sport/done',
                template: '<ng-done-ex></ng-done-ex>'
            })
            .state('addEx', {
                url: '/sport/add',
                template: '<ng-add-ex></ng-add-ex>'
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