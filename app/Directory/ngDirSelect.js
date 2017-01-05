/**
 * Created by Александр on 03.01.2017.
 */
module.exports = function(homeApp) {

    homeApp.directive("ngDirSelect", function() {
        return {
            restrict: 'E',
            templateUrl: '/app/Directory/_dirSelect.html',
            replace: true,
            controllerAs: 'DirCtrl',
            bindToController: true,
            controller: function($scope, $location, $q, $timeout, DirectoryService, LOVService, DropDownFactory) {
                var vm = this;
                vm.issue = null;
                vm.subissue = null;
                vm.currentSubIssue = {};

                vm.onSelectListener = function(type, value) { // Обработчик dropDown
                    console.log(type);
                    console.log(value);

                    if(type == 'issue') {
                        DirectoryService.getSubIssues(value).then(function(objectData) {
                            DropDownFactory.list = objectData.data;
                            DropDownFactory.header = "Выбрать подтему"; // $digest!!!
                            console.log("ВЫБОР ТЕМЫ");
                        });
                    }

                    if(type == 'subissue') {
                        DirectoryService.getContent(value).then(function(objectData) {
                            DropDownFactory.header = value;
                            vm.currentSubIssue.title = value;
                            vm.currentSubIssue.contain = objectData.data.textData;
                        });
                    }

                };
                vm.startValue = function(type) {

                    return $q(function(resolve, reject) {

                        if(type == 'issue') {
                            resolve("Выбрать тему");
                        }
                        if(type == 'subissue') {
                            resolve("Выбрать подтему");
                        }
                    });

                };

                vm.updateData = function(newValue) {

                    var data = {
                      "subIssue" : vm.currentSubIssue.title,
                      "content" : newValue
                    };

                    DirectoryService.updateSubIssue(data).then(function(data) {

                    });

                };


            },
            link: function(scope, element, attrs) {

                //======================================РЕДАКТОР КОНТЕНТА========================================//
                var contentElem = element.find("#dir_content");
                var textArea = element.find("#new_content");
                var pre = element.find("#content_pre");

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
                    if(contentEditor.isActive || pre.html() == "") return;

                    contentEditor.isActive = true;
                    textArea.css({
                        "width" :  pre[0].offsetWidth,
                        "maxWidth" :  pre[0].offsetWidth + 20,
                        "height" :  pre[0].offsetHeight + 20
                    });
                    contentElem.removeClass('yellow_shadow');
                    textArea.show();
                    panelButton.show();
                    console.log(pre[0].textContent);
                    contentEditor.oldHtml = pre[0].textContent;
                    pre.html(null);
                    textArea.val(contentEditor.oldHtml);
                    console.log(textArea.val());
                }

                function commit() {
                    pre.text(textArea.val());
                    scope.DirCtrl.updateData(textArea.val());
                    textArea.hide();
                    panelButton.hide();
                    contentEditor.isActive = false;
                }


                function rollback() {
                    pre.text(contentEditor.oldHtml);
                    textArea.hide();
                    panelButton.hide();
                    contentEditor.isActive = false;
                }

                contentElem.on('mouseenter', function(event) {
                    if(contentEditor.isActive) return;
                    contentElem.addClass('yellow_shadow');
                });

                contentElem.on('mouseleave', function(event) {
                        contentElem.removeClass('yellow_shadow');
                });

                //======================================/РЕДАКТОР КОНТЕНТА========================================//

                //====================================== Копирование в буфер обмена ===============================//
                var timerId;
                var copyTextareaBtn = document.querySelector('#copy_button');
                var alertPanel = angular.element(document.querySelector("#copy_alert_panel"));

                copyTextareaBtn.addEventListener('click', function(event) {
                    if(pre.html() == "") return;
                    var copyTextarea = pre;
                    copyTextarea.select();

                    try {
                        var successful = document.execCommand('copy');
                        var msg = successful ? 'successful' : 'unsuccessful';
                        console.log('Copying text command was ' + msg);
                    } catch (err) {
                        console.log('Oops, unable to copy');
                    }

                    alertPanel.show();
                    clearTimeout(timerId);
                    timerId = setTimeout(function() {
                        alertPanel.hide();
                    }, 2000)
                });
                /**
                var copyEmailBtn = document.querySelector('#copy_button');
                var timerId;
                copyEmailBtn.addEventListener('click', function(event) {
                    if(pre.html() == "") return;
                    var alertPanel = angular.element(document.querySelector("#copy_alert_panel"));
                    var range = document.createRange();
                    range.selectNode(pre[0]);
                    window.getSelection().addRange(range);


                    try {
                        var successful = document.execCommand('copy');
                        var msg = successful ? 'successful' : 'unsuccessful';
                    } catch(err) {
                        console.log('Oops, unable to copy');
                    }

                    window.getSelection().removeAllRanges();

                    alertPanel.show();
                    clearTimeout(timerId);
                    timerId = setTimeout(function() {
                        alertPanel.hide();
                    }, 2000)


                });

                 */
            }
        }
    });


};