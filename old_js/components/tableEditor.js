/**
 * Created by Александр on 27.11.2016.
 */
function TableEditor(tableWrapElement, buttonPanel) {

        var table = tableWrapElement.children[0]; // Сама таблица
        var panel = buttonPanel;

        $(panel).hide();

        $(panel).find(".ok_button").click(save);
        $(panel).find(".cancel_button").click(rollback);

        //alert(t.offsetTop + " " + t.offsetLeft);

        // Рендеринг поля для редактирования
        var textField;
        var target;
        var clickTarget;


        function dblClickHandler(event) {
            target = event.target;

            if(target.tagName != 'TD') {
                remove(target);
                return;
            }

            if(textField) {
                rollback();
                remove(target);
            }

            if(!$(target).hasClass("editable")) return;

            render(target);
        }


        function clickHandler(event) {
            clickTarget = event.target;

            if(textField) {
                console.log(clickTarget);
                console.log(textField);

                if(clickTarget == textField || target == textField) {
                    return;
                }

                rollback();
                remove();
            }

        }


        function render(target) {

            textField = document.createElement('INPUT');
            textField.type = 'text';
            textField.classList.add("form-control");
            $(textField).css("border-radius", "0px");
            $(textField).val($(target).html());
            textField.style.position = 'fixed';
            textField.style.height = target.offsetHeight + 'px';
            textField.style.width = target.offsetWidth + 'px';
            textField.style.top = target.getBoundingClientRect().top + 'px';
            textField.style.left = target.getBoundingClientRect().left + 'px';

            target.setAttribute("id", "active_cell");

            tableWrapElement.appendChild(textField);
            textField.focus();

            $(panel).css({
               "top" : textField.getBoundingClientRect().bottom + 5,
               "left" : textField.getBoundingClientRect().left + 35
            });
            $(panel).show();
        }

        function remove(target) {
            if(!textField) return;
            tableWrapElement.removeChild(textField);
            textField = null;
            $(panel).hide();
        }


        function save() {
            $(target).html($(textField).val());
        }


        function rollback() {
            target.removeAttribute("id");
        }

        tableWrapElement.addEventListener('scroll', remove); // Обработка скрола
        document.addEventListener('dblclick', dblClickHandler); // Обработка двойного клика
        document.addEventListener('click', clickHandler); // Обработка  клика
}