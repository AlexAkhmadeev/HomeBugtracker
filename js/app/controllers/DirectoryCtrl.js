/**
 * Created by Александр on 20.11.2016.
 */

var DirectoryCtrl = homeApp.controller('DirectoryCtrl', function ctrl($rootScope, $scope, $http, $location) {

    $scope.hi = (function(){
        return Math.pow(50,50);
    })();

});