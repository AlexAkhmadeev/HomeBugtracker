/**
 * Created by Александр on 01.01.2017.
 */
module.exports = function(homeApp) {
    /**
     * Get list of values service
     */
    homeApp.service('LOVService', function($http) {

        // Получение списка значений
        this.getListOfTicketStatus = function(lovType) {
            return $http.post("ajax/lov/get_values.php", {"lov_type" : lovType});
        };

    });


};