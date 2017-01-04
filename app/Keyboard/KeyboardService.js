/**
 * Created by Александр on 03.01.2017.
 */
module.exports = function(homeApp) {

    homeApp.service('KeyboardService', function ($http) {

        function getToday() {
            var d = new Date();
            return "" + ( ((d.getDay() + 1) < 10) ? "0" + (d.getDay() + 1) : (d.getDay() + 1)) + "." + (((d.getMonth() + 1) < 10) ? "0" + (d.getMonth() + 1) : (d.getMonth() + 1)) + "." + d.getFullYear();
        }

        // Загрузка всех тактов
        this.getAllBeats = function () {
            return $http.get('ajax/piano/loadbeats.php')
        };

        // Получение кол-ва минут (для статистики)
        this.getStat = function () {
            return $http.get("ajax/piano/get_stat.php");
        };

        // Редактирование таблицы с тактами
        this.editBeats = function (data) {
            return $http.post("ajax/piano/edit_beats.php", data);
        };

        // Добавление новых тактов
        this.addBeats = function (data) {
            return $http.post("ajax/piano/addbeats.php", data);
        }

    });
}

