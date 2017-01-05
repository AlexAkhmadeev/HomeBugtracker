/**
 * Created by Александр on 01.01.2017.
 */
module.exports = function(homeApp) {

    homeApp.directive("ngHomeTitle", function() {
        return {
            restrict: 'E',
            templateUrl: '/app/general/templates/_title.html',
            replace: true,
            controllerAs: 'TitleCtrl',
            bindToController: true,
            controller: function($scope, $state, $location) {
                var vm = this;


            }
        }
    });


};