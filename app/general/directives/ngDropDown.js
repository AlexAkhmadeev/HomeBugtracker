/**
 * Created by Александр on 02.01.2017.
 */
module.exports = function(homeApp) {

    homeApp.directive("ngDropDown", function() {
        return {
            restrict: 'E',
            templateUrl: '/app/general/templates/_dropDown.html',
            scope: {
                ngModel: '='
            },
            replace: true,
            controllerAs: 'DDCtrl',
            bindToController: true,
            controller: function($scope, $attrs, LOVService) {
                var vm = this;

                setInterval(function() {
                    console.log(this.ngModel);
                }, 1000);

                LOVService.getListOfTicketStatus($attrs["lovType"]).then(function(dataObject) {
                    vm.items = dataObject.data;
                });

            },
            link: function(scope, element, attrs) {
                var button = element.find("#dd_button");
                console.log(button);
                var list = element.find("#list");
                var body = angular.element(document.body);
                var window = angular.element(window);

                list.hide();
                console.log("button_css", button.css('width'));

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

                list.on('click', function(e) {
                    var target = angular.element(e.target);
                    if(target.hasClass('dd_item')) button.html(target.html());
                });

                window.on('scroll', function(e) {

                    list.hide();

                });


            }

        }
    });


};