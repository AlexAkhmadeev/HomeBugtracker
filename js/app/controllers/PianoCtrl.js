/**
 * Created by Александр on 20.11.2016.
 */
var PianoCtrl = homeApp.controller('PianoCtrl', function ctrl($rootScope, $scope, $http, $location) {

    $scope.beats = {};


    // Статистика
    $scope.stat = {

      "totalBeats" : 200,
      "doneBeats" : 147,
      "totalHours" : null,
      "totalDays" : null

    };

    // Получение кол-ва минут
    $http.get("ajax/piano/get_stat.php").success(function(data) {

        $scope.stat.totalHours = (data/60).toFixed(1); // часы
        $scope.stat.totalDays = (data/(60*24)).toFixed(1); // сутки

    });


    // Загрузка данных с сервера
        $http.get('ajax/piano/loadbeats.php').success(function(data) {
                $scope.beats = data;
            });


    // Загрузка данных на сервер
    $scope.addbeats = function(beat, beatform) {
        if(beatform.$valid) {
            $http.post("ajax/piano/addbeats.php", beat).success(function(data) {

                $scope.getTargetView("/piano/all");

            });
        }
    };


    // Переключение экранов
    $scope.getTargetView = function(path) {
        $location.path(path);
    };


    // Сохранение изменений
    $scope.save = function() {

        var $ac = $("#active_cell"); // Выбранная ячейка таблицы

        //alert($ac.attr("data-col_name") + "\n" + $ac.attr("data-row_id") + "\n" + $ac.html());

        $http.post("ajax/piano/edit_beats.php", {
            "row_id" : $ac.attr("data-row_id"),
            "value" : $ac.html(),
            "col_name" : $ac.attr("data-col_name")
        }).success(function(data) {

            console.log(data);

        });

    };



});