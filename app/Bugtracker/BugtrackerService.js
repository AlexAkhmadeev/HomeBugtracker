/**
 * Created by ��������� on 01.01.2017.
 */
module.exports = function(homeApp) {

    homeApp.service('BugtrackerService', function($http) {

        // ��������� ������ �������
        this.getListOfTickets = function() {
            return $http.get('ajax/bugtracker/get_ticket_list.php');
        };


    });


};