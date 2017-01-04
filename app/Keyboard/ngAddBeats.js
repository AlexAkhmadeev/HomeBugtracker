/**
 * Created by Александр on 03.01.2017.
 */
module.exports = function(homeApp) {

    homeApp.directive("ngAddBeats", function() {
        return {
            restrict: 'E',
            templateUrl: '/app/Keyboard/_addBeats.html',
            replace: true,
            controllerAs: 'KBCtrl',
            bindToController: true,
            controller: function($scope, KeyboardService, $location) {
                var vm = this;

                vm.beat = {};

                // Добавление тактов
                vm.addBeats = function(beatform) {
                    if(beatform.$valid) {
                        KeyboardService.addBeats(vm.beat).then(function(data) {
                            $location.path('/keyboard/beats');
                        });
                    }
                };


            }
        }
    });


};