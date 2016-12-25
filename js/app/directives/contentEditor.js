/**
 * Created by Александр on 25.12.2016.
 */

homeApp.directive("contentEditor", function($http, $rootScope) {

    return {
        controller: function($scope, $element) {
            console.log("currentTicketId", $scope.currentTicketId);
        },

        link : function($scope, element, attrs) {

            $http.post("ajax/bugtracker/get_ticket.php", {"ticket_id": $scope.currentTicketId}).success(function(data) {
                //alert(JSON.stringify(data, null, 8));
                console.log("id", $scope.currentTicketId);
                $scope.currentTicket = data;
                $scope.currentTypeOfTicket = data.type;
            });

        }


        }


});




















/** ********************************************************************************************************

 function kostili() {
                    var okButton = contentFieldElement.previousElementSibling;
                    okButton.style.display = "none";
                    okButton.addEventListener("click", save);

                    var options = {};

                    contentFieldElement.classList.add("editable");

                    var hint = null;
                    var textarea = null;
                    var panelButton = null;


                    contentFieldElement.addEventListener("mouseenter", renderHint);
                    contentFieldElement.addEventListener("mouseleave", removeHint);

                    // Рисуем табличку edit
                    function renderHint() {
                        if (options.editMode) return;

                        hint = document.createElement('DIV');
                        hint.innerHTML = "Edit";
                        hint.classList.add("hint");

                        setTimeout(function () {
                            hint.style.top = contentFieldElement.getBoundingClientRect().top - hint.offsetHeight + "px";
                            hint.style.left = contentFieldElement.getBoundingClientRect().left - hint.offsetWidth + "px";
                            contentFieldElement.appendChild(hint);
                        }, 1);

                        hint.addEventListener("click", editContain);
                    }

                    // Убираем табличку edit
                    function removeHint() {
                        if (!hint) return;
                        contentFieldElement.removeChild(hint);
                        //hint.removeEventListener("click", editContain);
                    }

                    // Включаем режим редактирования
                    function editContain() {
                        options.editMode = true;
                        removeHint();

                        contentFieldElement.removeEventListener("mouseenter", renderHint);
                        contentFieldElement.removeEventListener("mouseleave", removeHint);

                        //alert(contentFieldElement.innerHTML);
                        renderTextArea();
                        renderButtonPanel();
                    }

                    // Рисуем textarea
                    function renderTextArea() {
                        textarea = document.createElement('TEXTAREA');
                        textarea.classList.add("edit_window");
                        textarea.style.padding = "30px 20px 20px 20px";
                        textarea.style.top = contentFieldElement.getBoundingClientRect().top + "px";
                        textarea.style.left = contentFieldElement.getBoundingClientRect().left + "px";
                        textarea.style.maxWidth = textarea.style.width = contentFieldElement.offsetWidth + "px";
                        textarea.style.maxHeight = textarea.style.height = contentFieldElement.offsetHeight + "px";
                        textarea.value = contentFieldElement.firstElementChild.textContent;
                        contentFieldElement.appendChild(textarea);
                    }

                    // Рисуем панель с кнопками ОК и X
                    function renderButtonPanel() {
                        panelButton = document.createElement('DIV');
                        panelButton.classList.add("panel_button");
                        panelButton.style.top = contentFieldElement.getBoundingClientRect().top + "px";
                        panelButton.style.left = contentFieldElement.getBoundingClientRect().left + "px";
                        okButton.style.display = "block";

                        var cancelButton = document.createElement('BUTTON');
                        cancelButton.classList.add("btn-danger");
                        cancelButton.classList.add("btn");
                        cancelButton.classList.add("cancel_button");
                        cancelButton.style.marginLeft = "52px";
                        cancelButton.innerHTML = "X";
                        cancelButton.addEventListener("click", rollBack);
                        panelButton.appendChild(cancelButton);

                        contentFieldElement.appendChild(panelButton);
                    }

                    // Убираем textarea
                    function removeTextArea() {
                        contentFieldElement.removeChild(textarea);
                    }

                    // Убираем панель с кнопками
                    function removeButtonPanel() {
                        contentFieldElement.removeChild(panelButton);
                        okButton.style.display = "none";
                    }


                    // Откат изменений
                    function rollBack() {

                        removeTextArea();
                        removeButtonPanel();
                        options.editMode = false;
                        contentFieldElement.addEventListener("mouseenter", renderHint);
                        contentFieldElement.addEventListener("mouseleave", removeHint);

                    }

                    // Сохранение изменений
                    function save() {

                        var saveContent = textarea.value;
                        removeTextArea();
                        removeButtonPanel();
                        contentFieldElement.firstElementChild.textContent = saveContent;
                        options.editMode = false;
                        contentFieldElement.addEventListener("mouseenter", renderHint);
                        contentFieldElement.addEventListener("mouseleave", removeHint);

                    }

        }
 */