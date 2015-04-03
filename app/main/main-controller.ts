/// <reference path="../libs.d.ts" />

require('./main-controller.styl');

export class MainController {
    static $inject = ['$scope'];

    constructor($scope: ng.IScope) {
    }
}

import _module = require('angular-module');
_module.controller('MainController', MainController);