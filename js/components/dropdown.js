/**
 * Конструктор выпадающего списка
 * @param options
 * @constructor
 */
function Dropdown(options) { // конструктор дропдауна
    var title = options.title;
    var items = options.items;

    var container; // создаваемый элемент

    this.getElement = function() { // получение элемента
        if(!container) render();
        return container;
    }

    var self = this; // сохраняем контекст
    this.onSelect = null;

    function render() {
        container = document.createElement('DIV'); // корневой контейнер

        var button = document.createElement('BUTTON'); // кнопка
        button.className = 'dropdown-title';
        button.innerHTML = title;

        var divList = document.createElement('DIV'); // контейнер для списка <ul>
        divList.className = 'list-div';

        var ul = document.createElement('UL'); // список
        ul.type = "none";
        ul.className = 'list-ul';

        container.appendChild(button);
        container.appendChild(divList);
        divList.appendChild(ul);

        for(var i = 0; i < items.length; i++) {
            var li = document.createElement('LI'); // элемент списка
            li.className = "list-item";
            li.innerHTML = items[i];
            ul.appendChild(li);
        }

        container.onclick = function (event) {
            var target = event.target;

            if(target.className == 'dropdown-title') {
                toggle();
                return;
            }
            if(target.className == 'list-item') {
                selectItem(target);
                return;
            }
            close();
        }

        document.addEventListener('click', function(event) {
            var target = event.target;
            if(target.className == 'dropdown-title' || target.className == 'list-item') return;
            close();
        });

        document.addEventListener('scroll', function(event) {
            close();
        });

        function toggle() {
            getComputedStyle(divList).display == 'none' ? divList.style.display = 'block' : divList.style.display = 'none';
            if(!document.elementFromPoint(button.getBoundingClientRect().left, button.getBoundingClientRect().bottom + divList.offsetHeight)) {
                divList.style.top = button.getBoundingClientRect().top - divList.offsetHeight + 'px';
            } else {
                divList.style.top = button.getBoundingClientRect().bottom + 'px';
            }

            if(divList.offsetHeight >= 350) {
               $('li.list-item').css('width', 333);
            }
        }

        function close() {
            divList.style.display = 'none';
        }


        function selectItem(item) {
            if(self.onSelect) self.onSelect(item);
            button.innerHTML = item.innerHTML;
            divList.style.display = 'none';
        }
    }

}