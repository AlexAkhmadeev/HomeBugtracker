/**
 * Created by Александр on 03.01.2017.
 */
module.exports = function(homeApp) {
    /**
     * Get list of values service
     */
    homeApp.service('DirectoryService', function($http) {

        // Получение списка всех тем
        this.getIssues = function() {
            return $http.get("ajax/directory/get_issues.php");
        };

        // Получение списка подтем данной темы
        this.getSubIssues = function(issue) {
            return $http.post("ajax/directory/get_subissues.php", {"issue" : issue});
        };

        // Получение содержимого данной подтемы
        this.getContent = function(subIssue) {
            return $http.post("ajax/directory/get_contain.php", {"subIssue" : subIssue});
        };

        // Добавление новой подтемы
        this.addSubIssue = function(formData) {
            return $http.post("ajax/directory/add_subissue.php", formData);
        };

        // Обновление содержимого подтемы
        this.updateSubIssue = function(data) {
            return $http.post("ajax/directory/update_content.php", data);
        };

    });


};