/**
 * Created by ��������� on 03.01.2017.
 */
module.exports = function(homeApp) {

    homeApp.service('SportService', function ($http) {

        function getToday() {
            var d = new Date();
            return "" + ( ((d.getDay() + 1) < 10) ? "0" + (d.getDay() + 1) : (d.getDay() + 1)) + "." + (((d.getMonth() + 1) < 10) ? "0" + (d.getMonth() + 1) : (d.getMonth() + 1)) + "." + d.getFullYear();
        }

        // �������� ���� ��������� ����������
        this.getDoneExercises = function() {
            return $http.get('ajax/sport/get_done_exercises.php');
        };


        // �������� ������ ���� ����������
        this.getListOfExercises = function() {
            return $http.get('ajax/sport/get_list_of_exercises.php');
        };

        // ���������� ��������� ����������
        this.addDoneExercise = function(data) {
            console.log(data);
            return $http.post("ajax/sport/add_done_exercises.php", data);
        };

        // ���������� ������ ����������
        this.addNewExercise = function(data) {
            return $http.post("ajax/sport/add_exercise.php", data);
        };


    });

};

