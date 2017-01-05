/**
 * Created by Александр on 04.01.2017.
 */
module.exports = function(homeApp) {

    homeApp.factory("DropDownFactory", function($http, LOVService, DirectoryService) {
        return {

            ticketStatus : LOVService.getListOfValues("TICKET_STATUS").then(function(result) {
                return result.data;
            }),

            ticketType : LOVService.getListOfValues("TICKET_TYPE").then(function(result) {
                return result.data;
            }),

            project : LOVService.getListOfValues("PROJECT").then(function(result) {
                return result.data;
            }),

            issues: DirectoryService.getIssues().then(function(result) {
                return result.data;
            }),

            subIssues: ["Жир", "Сало", "Маргарин"],//null // Динамически подтягивается,

            list: [],

            header: "Выбрать подтему"




        }
    });


};