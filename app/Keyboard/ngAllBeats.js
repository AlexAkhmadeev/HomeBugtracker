/**
 * Created by Александр on 03.01.2017.
 */
module.exports = function(homeApp) {

    homeApp.directive("ngAllBeats", function() {
        return {
            restrict: 'E',
            templateUrl: '/app/Keyboard/_allBeats.html',
            replace: true,
            controllerAs: 'KBCtrl',
            bindToController: true,
            controller: function($scope, KeyboardService) {
                var vm = this;

                KeyboardService.getAllBeats().then(function(dataObject) {
                    vm.beats = dataObject.data;
                });

                // Для link
                vm.KBService = KeyboardService;

            },
            link: function(scope, element, attrs) {

                var panelButton = element.find("#panel_button");
                var commitButton = element.find("#commit_button");
                var rollbackButton = element.find("#rollback_button");
                var page = angular.element(document.body);

                var input = angular.element('INPUT');
                console.log(input);

                panelButton.hide();

                var contentEditor = {};

                page.on('dblclick', activateEditorMode);
                commitButton.on('click', commit);
                rollbackButton.on('click', rollback);


                function activateEditorMode(event) {
                    var target = angular.element(event.target);
                    console.log(target);

                    if(contentEditor.isActive) return;
                    if(!target.hasClass("editable")) return;
                    contentEditor.isActive = true;

                    panelButton.show();
                }

                function commit() {

                    panelButton.hide();
                    contentEditor.isActive = false;
                }


                function rollback() {

                    panelButton.hide();
                    contentEditor.isActive = false;
                }



            }
        }
    });


};