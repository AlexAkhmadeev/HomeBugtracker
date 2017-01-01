/**
 * Created by Александр on 01.01.2017.
 */
module.exports = function(homeApp) {

    homeApp.service('LOVService', function($http) {

        // Получение списка статусов тикета
        this.getListOfTicketStatus = function() {
            return $http.post("ajax/lov/get_values.php", {"lov_type" : "TICKET_STATUS"});
        };


    });


};