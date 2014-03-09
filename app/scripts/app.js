'use strict';

angular.module('SoupApp', [
	'ngCookies',
	'ngResource',
	'ngSanitize',
	'ngRoute',
	'ngAnimate'
])
	.config(function ($routeProvider) {
		$routeProvider
			.when('/about', {
				templateUrl: 'views/about.html',
			})
			.otherwise({
				redirectTo: '/'
			});
	});
