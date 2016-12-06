/**
 * Created by Александр on 27.11.2016.
 */
function TableEditor(tableWrapElement) {

        var table = tableWrapElement.children[0]; // Сама таблица


        //alert(t.offsetTop + " " + t.offsetLeft);

        // Рендеринг поля для редактирования
        var textField;

        function clickHandler(event) {
            var target = event.target;

            if(target.tagName != 'TD') {
                remove();
                return;
            }



            if(textField) {
                remove();
            }


            render(target);

        }

        function render(target) {

            textField = document.createElement('INPUT');
            textField.type = 'text';
            textField.classList.add("form-control")
            textField.style.position = 'fixed';
            textField.style.height = target.offsetHeight + 'px';
            textField.style.width = target.offsetWidth + 'px';
            textField.style.top = target.getBoundingClientRect().top + 'px';
            textField.style.left = target.getBoundingClientRect().left + 'px';
            tableWrapElement.appendChild(textField);
            textField.focus();

        }

        function remove() {
            if(!textField) return;
            tableWrapElement.removeChild(textField);
            textField = null;
        }

        tableWrapElement.addEventListener('scroll', remove); // Обработка скрола
        document.addEventListener('dblclick', clickHandler); // Обработка двойного клика
        document.addEventListener('click', function () {
            if(textField) {
                remove();
            }
        }); // Обработка двойного клика
}