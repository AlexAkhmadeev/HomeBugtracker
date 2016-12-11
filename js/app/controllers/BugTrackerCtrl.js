/**
 * Created by Александр on 28.11.2016.
 */
var BugTrackerCtrl = homeApp.controller('BugTrackerCtrl', function ctrl($document, $rootScope, $scope, $http, $location, $templateCache, $routeParams) {

    // Объект текущего тикета
    $rootScope.currentTicket = null;


    // Идентификатор текущего тикета
    $rootScope.currentTicketId = 1;


    // Текущий проект
    $rootScope.currentProject = "";


    // Текущий статус тикета
    $rootScope.currentStatus = null;


    // Lists of values
    $rootScope.listOfProjects = null;
    $rootScope.listOfStatus = null;

    // Pre
    $scope.preOpen = "<pre>";
    $scope.preClose = "</pre>";

    // Создание тикета
    $scope.createTicket = function (ticket, createTicketForm) {
        if(createTicketForm.$valid) {
            if($rootScope.currentProject == "") return;
            ticket.code = $rootScope.currentProject;
            $http.post("ajax/bugtracker/create_ticket.php", ticket).success(function(data) {
                $location.path("/bugtracker/select");
            });
        }
    };


    // Получение списка тикетов
    $http.get('ajax/bugtracker/get_ticket_list.php').
        success(function(data) {
            $scope.tickets = data;
        });


    // Выбор тикета из списка
    $scope.selectTicket  = function(ticketId) {

            $rootScope.currentTicketId = ticketId;
            reloadCurrentTicket();
            $location.path("/bugtracker/current");


    };


    // Перезагрузка текущего тикета
    function reloadCurrentTicket() {
        $http.post("ajax/bugtracker/get_ticket.php", {"ticket_id": $rootScope.currentTicketId}).success(function(data) {

            $rootScope.currentTicket = data;
            
        });
    }


    // Переключение экранов
    $scope.getTargetView = function(path) {
        $location.path(path);
    };


    // Получаем список проектов
    $http.post("ajax/lov/get_values.php", {"lov_type" : "PROJECT"}).success(function(data) {
        var options = {};
        options.title = "Все проекты";
        //alert(JSON.stringify(data, null, 8));
        options.items = data;
        var projects = new DropdownModern(options); // Конструируем дропдаун
        $("#project_list").append(projects.getElement()); // Рисуем

        projects.onSelect = function(item) {
            $rootScope.currentProject = item.innerHTML;
        }
    });


    // Получаем список статусов тикета
    $http.post("ajax/lov/get_values.php", {"lov_type" : "TICKET_STATUS"}).success(function(data) {
        var options = {};
        options.title = $rootScope.currentTicket ? $rootScope.currentTicket.status : "Статус";
        //alert(JSON.stringify(data, null, 8));
        options.items = data;
        var updates = new DropdownModern(options); // Конструируем дропдаун
        $("#list_of_status").append(updates.getElement()); // Рисуем

        updates.onSelect = function(item) {

            $rootScope.currentTicket.status = item.innerHTML;

            $http.post("ajax/bugtracker/update_ticket_status.php", {"status": $rootScope.currentTicket.status, "id" : $rootScope.currentTicket.id}).success(function(data) {

            });
        }
    });


    // Редактирование контента тикета
    $scope.saveContent = function() {
        var $newContent = $("#ticket_content_pre").html();

        $http.post("ajax/bugtracker/update_ticket_contain.php", {"contain": $newContent, "id" : $rootScope.currentTicket.id}).success(function(data) {

        });

    };

    //alert(JSON.stringify($document, null, 8));

});