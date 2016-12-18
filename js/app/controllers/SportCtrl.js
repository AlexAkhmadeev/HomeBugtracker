/**
 * Created by Александр on 20.11.2016.
 */
var SportCtrl = homeApp.controller('SportCtrl', function ctrl($rootScope, $scope, $http, $location) {

    // Загрузка данных с сервера
    $http.get('ajax/sport/get_done_exercises.php').success(function(data) {
        $scope.doneExercises = data;
        //alert(JSON.stringify(data, null, 8));
    });

    // Загрузка данных с сервера
    $http.get('ajax/sport/get_list_of_exercises.php').success(function(data) {
        $scope.allExercises = data;
        //alert(JSON.stringify(data, null, 8));
    });

    // Данные для отправки на сервер
    $scope.doneExercise = {
        "date" : (new Date()).toLocaleDateString(),
        "ex1" : null,
        "ex2" : null,
        "ex3" : null,
        "ex4" : null,
        "ex5" : null,
        "ex6" : null,
        "ex7" : null,
        "ex8" : null,
        "ex9" : null,
        "ex10" : null,
        "ex11" : null,
        "ex12" : null,
        "ex13" : null
    };

    $scope.allExercises = {};

    // Переключение экранов
    $scope.getTargetView = function(path) {
        $location.path(path);
    };
    
    // Заполнить, как предыдущий
    $scope.fillLikePrev = function () {
        $scope.doneExercise.ex1 = "1";
        $scope.doneExercise.ex2 = "24";
        $scope.doneExercise.ex3 = "2**";
        $scope.doneExercise.ex4 = "3";
        $scope.doneExercise.ex5 = "9";
        $scope.doneExercise.ex6 = "13";
        $scope.doneExercise.ex7 = "17";
        $scope.doneExercise.ex8 = "15";
    };

    // Добавление сделанных упражнений
    $scope.addDoneExercises = function(exercise, formName) {

        if(formName.$valid) {
            $http.post("ajax/sport/add_done_exercises.php", exercise).success(function(data) {

                $scope.getTargetView("/sport/done");

            });
        }
    };

    // Добавление новых упражнений newExercise
    $scope.newExercise = function(exercise, formName) {

        if(formName.$valid) {

            $http.post("ajax/sport/add_exercise.php", exercise).success(function(data) {

                //alert(JSON.stringify(data, null, 8));
                $scope.getTargetView("/sport/exercises");

            });
        }
    };

});