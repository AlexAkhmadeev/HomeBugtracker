/**
 * Created by Александр on 04.01.2017.
 */
module.exports = function(homeApp) {

    homeApp.directive("ngLoadIndicator", function() {
        return {
            restrict: 'E',
            templateUrl: '/app/general/templates/_loadIndicator.html',
            replace: true,
            controllerAs: 'TitleCtrl',
            bindToController: true,
            controller: function() {

            }
        }
    });


};