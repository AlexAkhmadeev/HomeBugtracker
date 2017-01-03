/**
 * Created by Александр on 03.01.2017.
 */
module.exports = function(homeApp) {

    homeApp.directive("ngDirSelect", function() {
        return {
            restrict: 'E',
            templateUrl: '/app/Directory/_dirSelect.html',
            replace: true,
            controllerAs: 'DirCtrl',
            bindToController: true,
            controller: function($scope, DirectoryService, LOVService, $location) {
                var vm = this;



            }
        }
    });


};