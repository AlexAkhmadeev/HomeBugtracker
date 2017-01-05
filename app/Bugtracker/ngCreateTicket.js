/**
 * Created by Александр on 01.01.2017.
 */
module.exports = function(homeApp) {

    homeApp.directive("ngCreateTicket", function() {

        return {
            restrict: 'E',
            templateUrl: '/app/Bugtracker/_createTicket.html',
            replace: true,
            scope: {},
            controllerAs: 'BTCtrl',
            bindToController: true,
            controller: function(BugtrackerService, TransportService, LOVService, $location, $element, $q) {
                var vm = this;
                this.ticket = {};

                // Дропдаун
                vm.onSelectListener = function(type, value) { // Обработчик dropDown
                    vm.ticket[type] = value;
                };
                vm.startValue = function(type) {

                    return $q(function(resolve, reject) {

                        if(type == 'type') {
                            resolve("Выбрать тип");
                        }
                        if(type == 'code') {
                            resolve("Выбрать проект");
                        }
                    });

                };
                // /Дропдаун

                vm.createTicket = function(ticket, form) {

                   // alert(JSON.stringify(ticket, null, 8));

                    if(ticket.code && ticket.contain && ticket.title && ticket.type) {


                        BugtrackerService.createTicket(ticket).then(function(objectData) {
                            BugtrackerService.currentTicketId = objectData.data.newId;
                            $location.path("/bugtracker/current");

                        });

                    } else {
                            alert('Не все поля заполнены!');
                    }

                };

            }
        }
    });


};
