/**
 * Created by Александр on 03.01.2017.
 */
module.exports = function(homeApp) {

    homeApp.directive("ngDoneEx", function() {
        return {
            restrict: 'E',
            templateUrl: '/app/Sport/_doneEx.html',
            replace: true,
            controllerAs: 'SPCtrl',
            bindToController: true,
            controller: function($scope, SportService, $location) {
                var vm = this;

                function getToday() {
                    var d = new Date();
                    return "" + ( ((d.getDay() + 1) < 10) ? "0" + (d.getDay() + 1) : (d.getDay() + 1)) + "." + (((d.getMonth() + 1) < 10) ? "0" + (d.getMonth() + 1) : (d.getMonth() + 1)) + "." + d.getFullYear();
                }

                vm.doneExercise = {};
                vm.doneExercise.date = getToday();

                SportService.getDoneExercises().then(function(dataObject) {
                    vm.doneExercises = dataObject.data;
                });

                // Заполнить стандартно
                vm.fillLikePrev = function() {
                    vm.doneExercise.date = getToday();
                    vm.doneExercise.ex1 = "1";
                    vm.doneExercise.ex2 = "24";
                    vm.doneExercise.ex3 = "2**";
                    vm.doneExercise.ex4 = "3";
                    vm.doneExercise.ex5 = "9";
                    vm.doneExercise.ex6 = "13";
                    vm.doneExercise.ex7 = "17";
                    vm.doneExercise.ex8 = "15";
                };

                vm.addDoneExercises = function(formName) {

                    if(formName.$valid) {
                        SportService.addDoneExercise(vm.doneExercise).then(function(data) {
                            vm.doneExercise = {};
                            SportService.getDoneExercises().then(function(dataObject) {
                                vm.doneExercises = dataObject.data;
                            });

                        });
                    }
                };

            }

        }
    });


};