/**
 * Created by Александр on 01.01.2017.
 */
/**
 * Created by Александр on 01.01.2017.
 */
module.exports = function(homeApp) {

    homeApp.directive("ngTicketList", function() {
        return {
            restrict: 'E',
            templateUrl: '/app/Bugtracker/_ticketList.html',
            replace: true,
            controllerAs: 'BTCtrl',
            bindToController: true,
            controller: function(BugtrackerService, LOVService) {
                var vm = this;

               BugtrackerService.getListOfTickets().then(function(dataObject) {
                   vm.tickets = dataObject.data;
               });

                vm.typeOfTicket = function(type) {
                    console.log(type);
                    if(type == "Задача") {
                        return { color: "#1785ee"};
                    } else {
                        return { color: "#DD4444"};
                    }

                };


                vm.statusOfTicket = function(status) {
                    console.log(status);
                    if(status == "Новый") {
                        return { color: "#ff1515"};
                    } else if(status == "В работе") {
                        return { color: "#e6bf27"};
                    } else if(status == "Готово") {
                        return { color: "green"};
                    }
                };

            }
        }
    });


};