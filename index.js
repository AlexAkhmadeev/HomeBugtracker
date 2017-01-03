/**
 * Created by Александр on 31.12.2016.
 */

/** ******************** Ангуляр *************************** */
var angular = require('angular'); // Angular core

require('angular-ui-router'); // Angular ui.router
//require('ui-bootstrap'); // Angular ui.bootstrap
var homeApp = angular.module('homeApp', ['ui.router']); // Приложение

require('./app')(homeApp); // Конфигурационный файл приложения
/** ******************** /Ангуляр *************************** */


/** ******************** Стили *************************** */
require('./app/general/styles/main.css'); // Главный
require('./app/Bugtracker/bugtracker.css'); // Багтрекер
require('./app/Keyboard/piano.css'); // Клавиши

/** ******************** /Стили *************************** */