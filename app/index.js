/**
 * Created by ��������� on 01.01.2017.
 */
module.exports = function(homeApp) {

    require('./app.js')(homeApp); // ������� ������

    /* ��������� */
    require('./general/directives/ngHomeHeader.js')(homeApp);
    require('./general/directives/ngHomeTitle.js')(homeApp);
    require('./general/directives/ngMainView.js')(homeApp);
    require('./general/directives/ngDropDown.js')(homeApp);
    require('./Bugtracker/ngTicketList.js')(homeApp);
    require('./Bugtracker/ngCurrentTicket.js')(homeApp);
    require('./Bugtracker/ngCreateTicket.js')(homeApp);
    /* /��������� */


    /* ������� */
    require('./Bugtracker/BugtrackerService.js')(homeApp);
    require('./general/services/LOVService.js')(homeApp);
    require('./general/services/TransportService.js')(homeApp);
    /* /������� */

    /* ����������� */
    /* ����������� */

};