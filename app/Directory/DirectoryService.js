/**
 * Created by ��������� on 03.01.2017.
 */
module.exports = function(homeApp) {
    /**
     * Get list of values service
     */
    homeApp.service('DirectoryService', function($http) {

        // ��������� ������ ���� ���
        this.getIssues = function() {
            return $http.get("ajax/directory/get_issues.php");
        };

        // ��������� ������ ������ ������ ����
        this.getSubIssues = function(issue) {
            return $http.post("ajax/directory/get_subissues.php", {"issue" : issue});
        };

        // ��������� ����������� ������ �������
        this.getContent = function(subIssue) {
            return $http.post("ajax/directory/get_contain.php", {"subIssue" : subIssue});
        };

        // ���������� ����� �������
        this.addSubIssue = function(formData) {
            return $http.post("ajax/directory/add_subissue.php", formData);
        };

        // ���������� ����������� �������
        this.updateSubIssue = function(data) {
            return $http.post("ajax/directory/update_content.php", data);
        };

    });


};