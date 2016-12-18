/**
 * Created by Александр on 28.11.2016.
 */
var BugTrackerCtrl = homeApp.controller('BugTrackerCtrl', function ctrl($document, $rootScope, $scope, $http, $location, $templateCache, $routeParams) {

    // Объект текущего тикета
    $rootScope.currentTicket = null;


    // Идентификатор текущего тикета
    $rootScope.currentTicketId = 1;
    $rootScope.currentProject = "";
    $rootScope.currentStatus = null;
    $rootScope.currentTypeOfTicket = "";

    $scope.taskStyle = { color: "lightblue"};
    $scope.errorStyle = { color: "red"};


    // Задача или ошибка
    $scope.currentTicketType = function() {

        if($rootScope.currentTypeOfTicket == "Задача") {
            return $scope.taskStyle;
        } else {
            return $scope.errorStyle;
        }

    };

    $scope.typeOfTicket = function(type) {

        if(type == "Задача") {
            return { color: "#1785ee"};
        } else {
            return $scope.errorStyle;
        }

    };

    $scope.statusOfTicket = function(status) {

        if(status == "Новый") {
            return { color: "#ff1515"};
        } else if(status == "В работе") {
            return { color: "#e6bf27"};
        } else if(status == "Готово") {
            return { color: "green"};
        }

    };



    // Lists of values
    $rootScope.listOfProjects = null;
    $rootScope.listOfStatus = null;


    // Создание тикета
    $scope.createTicket = function (ticket, createTicketForm) {
        if(createTicketForm.$valid) {
            if($rootScope.currentProject == "") return;
            ticket.code = $rootScope.currentProject;
            ticket.type = $rootScope.currentTypeOfTicket;
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
    $scope.selectTicket  = function(ticketId, ticketType) {

            $rootScope.currentTicketId = ticketId;
            $rootScope.currentTypeOfTicket = ticketType;
            reloadCurrentTicket();
            console.log(angular.element(document.querySelector("#curViewTemplate")));
            $scope.getTargetView("/bugtracker/current");

    };


    // Перезагрузка текущего тикета
    function reloadCurrentTicket() {
        $http.post("ajax/bugtracker/get_ticket.php", {"ticket_id": $rootScope.currentTicketId}).success(function(data) {

            //alert(JSON.stringify(data, null, 8));
            $rootScope.currentTicket = data;
            $rootScope.currentTypeOfTicket = data.type;


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
        projects.width = "150px";
        $("#project_list").append(projects.getElement()); // Рисуем

        projects.onSelect = function(item) {
            $rootScope.currentProject = item.innerHTML;
        }
    });


    // Получаем список типов тикета
    $http.post("ajax/lov/get_values.php", {"lov_type" : "TICKET_TYPE"}).success(function(data) {
        var options = {};
        options.title = "Тип тикета";
        //alert(JSON.stringify(data, null, 8));
        options.items = data;
        var types = new DropdownModern(options); // Конструируем дропдаун
        types.width = "150px";
        $("#ticket_type").append(types.getElement()); // Рисуем

        types.onSelect = function(item) {
            $rootScope.currentTypeOfTicket = item.innerHTML;
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