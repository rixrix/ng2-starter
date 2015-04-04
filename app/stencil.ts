/// <reference path="libs.d.ts" />

require('angular-module');

require('./styles/index.styl');
require('./main/main-controller');

import _module = require('angular-module');

_module.config(['$httpProvider', '$routeProvider', '$locationProvider',
    function($httpProvider: ng.IHttpProvider,
             $routeProvider: ng.route.IRouteProvider,
             $locationProvider: ng.ILocationProvider)
    {
        $locationProvider.hashPrefix('!');
        $routeProvider
            .when('/', {
                template: <string>require('main/main-view.html'),
                controller: 'MainController'
            })
            .otherwise({
                redirectTo: '/'
            });
    }
]);
