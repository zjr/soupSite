'use strict';

angular.module('SoupApp')
    .config(['$urlRouterProvider', function($urlRouterProvider) {
        $urlRouterProvider.otherwise('home');
    }]);

angular.module('SoupApp')
    .config(['$stateProvider', function($stateProvider) {
        $stateProvider
            .state('soup', {
                abstract: true,
                url: '/',
                views: {
                    'navigation': {
                        templateUrl: 'views/navigation.html'
                    }
                }
            })
            .state('soup.home', {
                url: 'home',
            })
            .state('soup.about', {
                url: 'about',
                views: {
                    'main@': {
                        templateUrl: 'views/about.html'
                    }
                }
            })
            .state('soup.work', {
                url: 'work',
                views: {
                    'main@': {
                        templateUrl: 'views/work.html'
                    }
                }
            });
    }]);
