/**
 * Created by Александр on 01.01.2017.
 */
module.exports = function(homeApp) {

    homeApp.service('BugtrackerService', function($http) {

        function getToday() {
            var d = new Date();
            return "" + ( ((d.getDay()+1) < 10) ? "0" + (d.getDay()+1) : (d.getDay()+1)) + "." + (((d.getMonth()+1) < 10) ? "0" + (d.getMonth()+1) : (d.getMonth()+1)) + "." + d.getFullYear();
        }


        // Получение списка тикетов
        this.getListOfTickets = function() {
            return $http.get('ajax/bugtracker/get_ticket_list.php');
        };

        // Получение текущего тикета
        this.getCurrentTicket = function(id) {
            return $http.post("ajax/bugtracker/get_ticket.php", {"ticket_id": id});
        };

        // Создание тикета
        this.createTicket = function(ticket) {
                if(ticket.code && ticket.contain && ticket.title && ticket.type) {
                    ticket.date = getToday();
                    return $http.post("ajax/bugtracker/create_ticket.php", ticket);
                } else {
                    alert('Не все поля заполнены!');
                }
        };

        // Апдейт статуса текущего тикета
        this.updateTicketStatus = function(id, status) {
            return $http.post("ajax/bugtracker/update_ticket_status.php", {"id": id, "status" : status});
        };


        // Апдейт контента тикета
        this.saveContent = function(id, newContent) {
            console.log("Обновляем тикет " + id + " контентом:\n" + newContent);

            $http.post("ajax/bugtracker/update_ticket_contain.php", {"contain": newContent, "id" : id});

        };



    });

};