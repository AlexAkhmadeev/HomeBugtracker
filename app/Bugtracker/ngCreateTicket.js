/**
 * Created by Александр on 01.01.2017.
 */
module.exports = function(homeApp) {

    homeApp.directive("ngCreateTicket", function() {

        return {
            restrict: 'E',
            templateUrl: '/app/Bugtracker/_createTicket.html',
            replace: true,
            controllerAs: 'BTCtrl',
            bindToController: true,
            controller: function(BugtrackerService, LOVService, $location) {
                var vm = this;

                vm.createTicket = function(ticket, form) {

                    alert(JSON.stringify(ticket, null, 8));

                };



            }
        }
    });


};
