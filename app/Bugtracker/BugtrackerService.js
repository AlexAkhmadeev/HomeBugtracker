/**
 * Created by Александр on 01.01.2017.
 */
module.exports = function(homeApp) {

    homeApp.service('BugtrackerService', function($http) {


        // Получение списка тикетов
        this.getListOfTickets = function() {
            return $http.get('ajax/bugtracker/get_ticket_list.php');
        };

        // Получение текущего тикета
        this.getCurrentTicket = function(id) {
            return $http.post("ajax/bugtracker/get_ticket.php", {"ticket_id": id});
        };

        // Создание тикета
        this.createTicket = function (ticket, createTicketForm) {
            if(createTicketForm.$valid) {
                if($scope.currentProject == "") return;
                ticket.code = $scope.currentProject;
                ticket.type = $scope.currentTypeOfTicket;
                $http.post("ajax/bugtracker/create_ticket.php", ticket).success(function(data) {
                    $location.path("/bugtracker/current");
                });
            }
        };


    });

};