/**
 * Created by Александр on 03.01.2017.
 */
module.exports = function(homeApp) {

    homeApp.directive("ngAddEx", function() {
        return {
            restrict: 'E',
            templateUrl: '/app/Sport/_addEx.html',
            replace: true,
            controllerAs: 'SPCtrl',
            bindToController: true,
            controller: function($scope, SportService, $location) {
                var vm = this;

                vm.newExercise = function(form) {
                    if(form.$valid) {

                        SportService.addNewExercise(vm.newEx).then(function (d) {
                            $location.path("/sport/all");
                        });
                    }
                };

            }

        }
    });


};