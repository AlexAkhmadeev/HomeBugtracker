$(function () {

    document.addEventListener("keydown", function(event) {

            var keyCode = event.keyCode;

        if(!(keyCode == 13 && event.altKey)) return;

        refresh();

    });

    function refresh() {
        alert("Обновляю...");
    }

});


