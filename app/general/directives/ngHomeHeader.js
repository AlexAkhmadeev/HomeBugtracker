/**
 * Created by Александр on 01.01.2017.
 */
module.exports = function(homeApp) {

    homeApp.directive("ngHomeHeader", function() {
        return {
            restrict: 'E',
            templateUrl: '/app/general/templates/_header.html',
            replace: true,
            controllerAs: 'HeaderCtrl',
            bindToController: true,
            controller: function() {
                var vm = this;

                vm.title = "Создание тикета";

                vm.buttons = [
                    {
                    "title" : "Список тикетов",
                    "sref" : "ticketList"
                    },
                    {
                    "title" : "Назад к тикету",
                    "sref" : "currentTicket"
                    },
                    {
                    "title" : "Ещё кнопка",
                    "sref" : "invalidLink"
                    }
                ];
            }
        }
    });


};