/**
 * Created by Александр on 27.11.2016.
 */
function TableEditor(tableWrapElement, buttonPanel) {

        var table = tableWrapElement.children[0]; // Сама таблица
        var panel = buttonPanel;

        $(panel).hide();

        //alert(t.offsetTop + " " + t.offsetLeft);

        // Рендеринг поля для редактирования
        var textField;

        function clickHandler(event) {
            var target = event.target;

            if(target.tagName != 'TD') {
                remove(target);
                return;
            }

            if(textField) {
                remove(target);
            }

            if(!$(target).hasClass("editable")) return;


            render(target);
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


        }


        function rollback() {

        }

        tableWrapElement.addEventListener('scroll', remove); // Обработка скрола
        document.addEventListener('dblclick', clickHandler); // Обработка двойного клика
        document.addEventListener('click', function () {
            if(textField) {
                remove();
            }
        }); // Обработка двойного клика
}