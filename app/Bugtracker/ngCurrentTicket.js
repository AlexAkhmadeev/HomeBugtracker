/**
 * Created by Александр on 01.01.2017.
 */
module.exports = function(homeApp) {

    homeApp.directive("ngCurrentTicket", function() {

        return {
            restrict: 'E',
            templateUrl: '/app/Bugtracker/_currentTicket.html',
            replace: true,
            controllerAs: 'BTCtrl',
            bindToController: true,
            controller: function(BugtrackerService, LOVService, $location) {
                var vm = this;

                BugtrackerService.getCurrentTicket(BugtrackerService.currentTicketId).then(function(objectData){
                    vm.currentTicket = objectData.data;
                });

            },
            link: function(scope, element, attrs) {

                scope.currentTicketTypeStyle = function(type) {
                    console.log("Тип ", type);
                    if(type == "Ошибка") return {"color" : "red" };
                    return {"color" : "lightblue" };
                };

                var dd = element.find("#list_of_status").html();
                console.log(dd);

            }
        }
    });


};