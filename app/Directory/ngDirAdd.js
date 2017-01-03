/**
 * Created by Александр on 03.01.2017.
 */
module.exports = function(homeApp) {

    homeApp.directive("ngDirAdd", function() {
        return {
            restrict: 'E',
            templateUrl: '/app/Directory/_dirAdd.html',
            replace: true,
            controllerAs: 'DirCtrl',
            bindToController: true,
            controller: function($scope, DirectoryService, $location) {
                var vm = this;



            }
        }
    });


};