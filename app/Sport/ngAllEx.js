/**
 * Created by Александр on 03.01.2017.
 */
module.exports = function(homeApp) {

    homeApp.directive("ngAllEx", function() {
        return {
            restrict: 'E',
            templateUrl: '/app/Sport/_allEx.html',
            replace: true,
            controllerAs: 'SPCtrl',
            bindToController: true,
            controller: function($scope, SportService) {
                var vm = this;

                SportService.getListOfExercises().then(function(dataObject) {
                    vm.allExercises = dataObject.data;
                });

            }
        }
    });


};