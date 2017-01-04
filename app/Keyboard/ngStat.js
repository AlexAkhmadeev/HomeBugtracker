/**
 * Created by ��������� on 03.01.2017.
 */
module.exports = function(homeApp) {

    homeApp.directive("ngStat", function() {
        return {
            restrict: 'E',
            templateUrl: '/app/Keyboard/_stat.html',
            replace: true,
            controllerAs: 'KBCtrl',
            bindToController: true,
            controller: function($scope, KeyboardService) {
                var vm = this;

                // ����������
                vm.stat = {

                    "totalBeats" : 200,
                    "doneBeats" : 147,
                    "totalHours" : null,
                    "totalDays" : null

                };

                KeyboardService.getStat().then(function(objectData) {
                    var data = objectData.data;

                    vm.stat.totalHours = (data/60).toFixed(1); // ����
                    vm.stat.totalDays = (data/(60*24)).toFixed(1); // �����

                });




            }
        }
    });


};