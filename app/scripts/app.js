'use strict';

angular.module('SoupApp', [
	'ngCookies',
	'ngResource',
	'ngSanitize',
	'ngRoute'
])
	.config(function ($routeProvider) {
		$routeProvider
			.when('/', {
				controller: 'MainCtrl'
			})
			.when('/about', {
				templateUrl: 'views/about.html',
				controller: 'MainCtrl'
			})
			.otherwise({
				redirectTo: '/'
			});
	});
