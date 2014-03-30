'use strict';

angular.module('SoupApp')
    .config(['$urlRouterProvider', function($urlRouterProvider) {
        $urlRouterProvider.otherwise('home');
    }]);

angular.module('SoupApp')
    .config(['$stateProvider', function($stateProvider) {
        $stateProvider
            .state('home', {
                url: '/home',
                views: {
                    'navigation': {
                        templateUrl: 'views/navigation.html'
                    }
                }
            })
            .state('about', {
                url: '/about',
                templateUrl: 'views/about.html'
            })
            .state('work', {
                url: '/work',
                templateUrl: 'views/work.html'
            });
    }]);
