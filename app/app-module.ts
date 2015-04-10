require('angular');
require('angular-route');
require('angular-sanitize');

var _appModule = angular.module('Stencil', [
    'ngRoute',
    'ngSanitize',
]);

export = _appModule;
