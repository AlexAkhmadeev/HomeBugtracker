/**
 * Created by Александр on 01.01.2017.
 */
module.exports = function(homeApp) {

    homeApp.directive("ngHomeHeader", function() {
        return {
            restrict: 'E',
            templateUrl: '/app/general/templates/_header.html',
            scope: {
              title: '@'
            },
            replace: true,
            controllerAs: 'HeaderCtrl',
            bindToController: true,
            controller: function($scope, $attrs) {
                var vm = this;

                vm.controls = stringToControls($attrs['ctrls']);

                function stringToControls(string) {

                    //var string = $attrs['ctrls'];
                    var ctrlsArr = string.split(' ');
                    var arr = [];

                    for(var i = 0; i < ctrlsArr.length; i++) {
                        var buttonName = ctrlsArr[i].split('|')[0].split('_').join(' ');
                        var state = ctrlsArr[i].split('|')[1];
                        arr.push({"title" : buttonName, "sref" : state})
                    }

                    return arr;
                }

            }

        }

    });


};