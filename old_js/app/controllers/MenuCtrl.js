/**
 * Created by Александр on 20.11.2016.
 */

var MenuCtrl = homeApp.controller('MenuCtrl', function ctrl($scope, $http) {


    $scope.go = function () {

        $http.get("ajax/ajaxhandler.php").success(function(data) {
            alert(data);
        });

    };

});