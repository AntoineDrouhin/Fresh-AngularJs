'use strict';

angular.module('MyApp')
    .config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('pagea', {
                url         : '/',
                templateUrl : 'app/views/pagea.html',
                controller  : 'mainCtrl'
            })
            .state('pageB', {
                url         : '/B',
                templateUrl : 'app/views/pageB.html',
                controller  : 'otherCtrl'
            })
    });