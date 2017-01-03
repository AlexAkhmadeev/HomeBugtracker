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

                // Координаты относительно элемента
                 function getCoords(elem) {
                    return {
                        top: elem.getBoundingClientRect().top + pageYOffset,
                        left: elem.getBoundingClientRect().left + pageXOffset,
                        bottom: elem.getBoundingClientRect().bottom + pageYOffset,
                        right: elem.getBoundingClientRect().right + pageXOffset
                    }
                }

                var panelButton = element.find("#panel_button");
                var commitButton = element.find("#commit_button");
                var rollbackButton = element.find("#rollback_button");
                var page = angular.element(document.body);

                var input = document.createElement('INPUT');
                input.type = 'text';
                input.classList.add('form-control');
                input.classList.add('edit-cell');
                document.body.appendChild(input);
                input = angular.element(input);
                input.hide();

                panelButton.css({"position" : "absolute"});
                panelButton.hide();

                var contentEditor = {};

                angular.element(document)[0].addEventListener('scroll', rollback);
                page.on('dblclick', activateEditorMode);
                page.on('click', clickHandler);
                commitButton.on('click', commit);
                rollbackButton.on('click', rollback);


                function activateEditorMode(event) {
                    var target = angular.element(event.target);

                    if(contentEditor.isActive) return;
                    if(!target.hasClass("editable")) return;

                    contentEditor.currentCell = target;

                    //Расположение
                    panelButton.css({
                        "top" : getCoords(target[0]).bottom + 2,
                        "left" : getCoords(target[0]).left - 7
                    });

                    input.css({
                        "top" : getCoords(target[0]).top + 1,
                        "left" : getCoords(target[0]).left,
                        "width" : target[0].offsetWidth,
                        "height" : target[0].offsetHeight,
                        "borderRadius" : 0,
                        "fontSize" : 18
                    });

                    contentEditor.oldValue = target.html();
                    input.val(contentEditor.oldValue);
                    contentEditor.isActive = true;
                    panelButton.show();
                    input.show();
                    input[0].focus();
                }

                function commit() {

                    if(contentEditor.oldValue == input.val()) {
                        rollback();
                        return;
                    }

                    scope.KBCtrl.KBService.editBeats({ // Отправка данных на сервер
                        "row_id": contentEditor.currentCell.attr("data-row_id"),
                        "col_name": contentEditor.currentCell.attr("data-col_name"),
                        "value": input.val()
                    }).then(function(d) {
                        //alert(JSON.stringify(d.data, null, 8))
                    });

                    contentEditor.currentCell.html(input.val());
                    input.val(null);
                    input.hide();
                    panelButton.hide();
                    contentEditor.isActive = false;
                }


                function rollback() {
                    input.val(null);
                    input.hide();
                    panelButton.hide();
                    contentEditor.isActive = false;
                }

                function clickHandler(event) {
                    var target = angular.element(event.target);
                    if(target.hasClass("edit-cell")) return;
                    rollback();
                }

            }
        }
    });


};