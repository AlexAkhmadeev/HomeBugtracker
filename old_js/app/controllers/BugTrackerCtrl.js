/**
 * Created by Александр on 28.11.2016.
 */
var BugTrackerCtrl = homeApp.controller('BugTrackerCtrl', function ctrl($document, $rootScope, $scope, $http, $location, $templateCache, $routeParams) {

    // Объект текущего тикета
    $scope.currentTicket = null;

    // Идентификатор текущего тикета
    $scope.currentTicketId = 4;
    $scope.currentProject = "";
    $scope.currentStatus = null;
    $scope.currentTypeOfTicket = "";

    $scope.taskStyle = { color: "lightblue"};
    $scope.errorStyle = { color: "red"};


    // Задача или ошибка
    $scope.currentTicketType = function() {

        if($scope.currentTypeOfTicket == "Задача") {
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
    $scope.listOfProjects = null;
    $scope.listOfStatus = null;


    // Создание тикета
    $scope.createTicket = function (ticket, createTicketForm) {
        if(createTicketForm.$valid) {
            if($scope.currentProject == "") return;
            ticket.code = $scope.currentProject;
            ticket.type = $scope.currentTypeOfTicket;
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

            $scope.currentTicketId = ticketId;
            $scope.currentTypeOfTicket = ticketType;
            //reloadCurrentTicket();
            console.log($scope.currentTicketId);
            $scope.getTargetView("/bugtracker/current");

    };


    // Загрузка текущего тикета
    function reloadCurrentTicket() {
        $http.post("ajax/bugtracker/get_ticket.php", {"ticket_id": $scope.currentTicketId}).success(function(data) {

            //alert(JSON.stringify(data, null, 8));
            $scope.currentTicket = data;
            $scope.currentTypeOfTicket = data.type;


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
            $scope.currentProject = item.innerHTML;
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
            $scope.currentTypeOfTicket = item.innerHTML;
        }
    });


    // Получаем список статусов тикета
    $http.post("ajax/lov/get_values.php", {"lov_type" : "TICKET_STATUS"}).success(function(data) {
        var options = {};
        options.title = $scope.currentTicket ? $scope.currentTicket.status : "Статус";
        //alert(JSON.stringify(data, null, 8));
        options.items = data;
        var updates = new DropdownModern(options); // Конструируем дропдаун
        $("#list_of_status").append(updates.getElement()); // Рисуем

        updates.onSelect = function(item) {

            $scope.currentTicket.status = item.innerHTML;

            $http.post("ajax/bugtracker/update_ticket_status.php", {"status": $scope.currentTicket.status, "id" : $scope.currentTicket.id}).success(function(data) {

            });
        }
    });


    // Редактирование контента тикета
    $scope.saveContent = function() {
        var $newContent = $("#ticket_content_pre").html();

        $http.post("ajax/bugtracker/update_ticket_contain.php", {"contain": $newContent, "id" : $scope.currentTicket.id}).success(function(data) {

        });

    };

    //alert(JSON.stringify($document, null, 8));

});