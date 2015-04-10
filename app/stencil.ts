/// <reference path="libs.d.ts" />

require('app-module');

require('./styles/index.styl');
require('./main/main-controller');

import _appModule = require('app-module');

_appModule.config(['$httpProvider', '$routeProvider', '$locationProvider',
    function($httpProvider: ng.IHttpProvider,
             $routeProvider: ng.route.IRouteProvider,
             $locationProvider: ng.ILocationProvider)
    {
        $locationProvider.hashPrefix('!');
        $routeProvider
        .when('/', {
            template: require('main/main-view.html'),
            controller: 'MainController'
        })
        .otherwise({
            redirectTo: '/'
        });
    }
]);
