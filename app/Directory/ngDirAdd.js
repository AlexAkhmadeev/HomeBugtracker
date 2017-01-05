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
            controller: function($scope, $q, $location, DropDownFactory, DirectoryService) {
                var vm = this;
                vm.subissue = {};

                vm.onSelectListener = function(type, value) { // Обработчик dropDown
                    vm.subissue.issue = value;
                };
                vm.startValue = function(type) {
                    return $q(function(resolve) {
                            resolve("Выбрать тему");
                    });
                };

                vm.addSubIssue = function(formData, form) {

                    //alert(JSON.stringify(formData, null, 8));
                    if(!vm.subissue.issue) {
                        alert("Пожалуйста, выберите тему!");
                        return;
                    }

                    DirectoryService.addSubIssue(formData).then(function(data) {

                        $location.path('/directory/select');
                    });

                }

            }
        }
    });


};