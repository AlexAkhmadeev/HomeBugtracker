/**
 * Created by Александр on 01.01.2017.
 */
module.exports = function(homeApp) {

    homeApp.directive("ngCurrentTicket", function() {

        return {
            restrict: 'E',
            templateUrl: '/app/Bugtracker/_currentTicket.html',
            scope: true,
            replace: true,
            controllerAs: 'BTCtrl',
            bindToController: true,
            controller: function(BugtrackerService, LOVService, $location, $q) {
                var vm = this;

                vm.BTServie = BugtrackerService;

                vm.onSelectListener = function(type, value) {
                    BugtrackerService.updateTicketStatus(vm.currentTicket.id, value);
                };

                /**
                 * Возвращает промис с типом
                 * @param type
                 * @returns {*}
                 */
                vm.startValue = function(type) {

                    if(type == 'status') {
                        return BugtrackerService.getCurrentTicket(BugtrackerService.currentTicketId).then(function(objectData) {
                            return $q(function(resolve) {
                                resolve(objectData.data.status);
                            })
                        });
                    }

                };




                BugtrackerService.getCurrentTicket(BugtrackerService.currentTicketId).then(function(objectData){
                    vm.currentTicket = objectData.data;
                });

            },
            link: function(scope, element, attrs, BugtrackerService) {

                scope.currentTicketTypeStyle = function(type) {
                    if(type == "Ошибка") return {"color" : "red" };
                    return {"color" : "lightblue" };
                };


                //======================================РЕДАКТОР КОНТЕНТА========================================//
                var contentElem = element.find("#ticket_content");
                var textArea = element.find("#new_content");
                var pre = element.find("#ticket_content_pre");

                var panelButton = element.find("#panel_button");
                var commitButton = element.find("#commit_button");
                var rollbackButton = element.find("#rollback_button");

                panelButton.hide();
                textArea.hide();

                var contentEditor = {};

                contentElem.on('dblclick', activateEditorMode);
                commitButton.on('click', commit);
                rollbackButton.on('click', rollback);


                function activateEditorMode() {
                    if(contentEditor.isActive) return;

                    contentEditor.isActive = true;
                    textArea.css({
                        "width" :  pre[0].offsetWidth,
                        "maxWidth" :  pre[0].offsetWidth,
                        "height" :  pre[0].offsetHeight
                    });
                    textArea.show();
                    panelButton.show();
                    contentEditor.oldHtml = pre.html();
                    pre.html(null);
                    textArea.val(contentEditor.oldHtml);
                }

                function commit() {
                    pre.html(textArea.val());
                    scope.BTCtrl.BTServie.saveContent(scope.BTCtrl.currentTicket.id, textArea.val()); // Отправка данных на сервер
                    textArea.hide();
                    panelButton.hide();
                    contentEditor.isActive = false;
                }


                function rollback() {
                    pre.html(contentEditor.oldHtml);
                    textArea.hide();
                    panelButton.hide();
                    contentEditor.isActive = false;
                }



                //======================================/РЕДАКТОР КОНТЕНТА========================================//
            }
        }
    });


};