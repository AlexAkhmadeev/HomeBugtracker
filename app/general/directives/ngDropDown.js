/**
 * Created by Александр on 02.01.2017.
 */
module.exports = function(homeApp) {

    homeApp.directive("ngDropDown", function() {
        return {
            restrict: 'E',
            templateUrl: '/app/general/templates/_dropDown.html',
            replace: true,
            controllerAs: 'DDCtrl',
            bindToController: true,
            controller: function($scope, $attrs, LOVService) {
                var vm = this;


                LOVService.getListOfTicketStatus($attrs["lovType"]).then(function(dataObject) {
                    vm.items = dataObject.data;
                });

            },
            link: function(scope, element, attrs) {
                var list = element.find("#list");

                

            }

        }
    });


};