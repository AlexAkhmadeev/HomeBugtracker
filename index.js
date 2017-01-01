/**
 * Created by Александр on 31.12.2016.
 */

/** ******************** Ангуляр *************************** */
var angular = require('angular'); // Angular core

require('angular-ui-router'); // Angular ui.router
var homeApp = angular.module('homeApp', ['ui.router']); // Приложение

require('./app')(homeApp); // Конфигурационный файл приложения
/** ******************** /Ангуляр *************************** */

require('./app/general/styles/main.css'); // Стили