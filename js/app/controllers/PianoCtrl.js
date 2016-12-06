/**
 * Created by Александр on 20.11.2016.
 */
var PianoCtrl = homeApp.controller('PianoCtrl', function ctrl($scope, $http) {

    $scope.beats = {};

    // Загрузка данных с сервера
        $http.get('ajax/piano/loadbeats.php').
            success(function(data) {
                $scope.beats = data;
            });

    // Загрузка данных на сервер
    $scope.addbeats = function(beat, beatform) {
        if(beatform.$valid) {
            $http.post("ajax/piano/addbeats.php", beat).success(function(data) {

                alert(JSON.stringify(data, null, 8));
                //document.body.innerHTML = JSON.stringify(data, null, 8);

            });
        }

    };


});