/**
 * Created by Александр on 02.01.2017.
 */
module.exports = function(homeApp) {

    homeApp.directive("ngDropDown", function() {
        return {
            restrict: 'E',
            templateUrl: '/app/general/templates/_dropDown.html',
            scope: true,
            replace: true,
            controllerAs: 'DDCtrl',
            bindToController: true,
            controller: function($scope, $attrs, LOVService, TransportService) {
                var vm = this;


                LOVService.getListOfTicketStatus($attrs["lovType"]).then(function(dataObject) {
                    vm.items = dataObject.data;
                });

                var startButtonValue = $scope.$parent.BTCtrl.startValue; // Возвращает promise!
                startButtonValue($attrs['type']).then(function(result) {
                    vm.currentItem = result;
                });



            },
            link: function($scope, element, attrs, TransportService) {
                var button = element.find("#dd_button");
                var list = element.find("#list");
                var body = angular.element(document.body);
                var window = angular.element(window);




                list.hide();

                angular.element('.dd_item').css({
                   "width" : button.css('width')
                });

                body.on('click', function(e) {
                    var target = angular.element(e.target);

                    if(target[0] == button[0]) {
                        list.toggle();
                        return;
                    }

                    list.hide();

                });

                var onSelectListener = $scope.$parent.BTCtrl.onSelectListener; // Должна быть определена в контроллере!

                list.on('click', function(e) {
                    var target = angular.element(e.target);
                    if(target.hasClass('dd_item')) button.html(target.html());

                    if(onSelectListener) {
                        onSelectListener(attrs['type'], target.html());
                    }

                });

                window.on('scroll', function(e) {

                    list.hide();

                });

            }

        }
    });


};