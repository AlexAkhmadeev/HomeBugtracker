/**
 * Created by Александр on 01.01.2017.
 */
module.exports = function(homeApp) {

    homeApp.directive("ngMainView", function() {
        return {
            restrict: 'E',
            templateUrl: '/app/general/templates/_mainView.html',
            replace: true,
            link: function(scope, element, attrs) {
                var today =
                scope.currentTime = (new Date()).toLocaleString();
            }
        }
    });


};
