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


    });

};