/**
 * Created by ��������� on 31.12.2016.
 */

/** ******************** ������� *************************** */
var angular = require('angular'); // Angular core

require('angular-ui-router'); // Angular ui.router
//require('ui-bootstrap'); // Angular ui.bootstrap
var homeApp = angular.module('homeApp', ['ui.router']); // ����������

require('./app')(homeApp); // ���������������� ���� ����������
/** ******************** /������� *************************** */


/** ******************** ����� *************************** */
require('./app/general/styles/main.css'); // �������
require('./app/Bugtracker/bugtracker.css'); // ���������

/** ******************** /����� *************************** */