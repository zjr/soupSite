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
				templateUrl: 'views/main.html',
				controller: 'MainCtrl'
			})
			.otherwise({
				redirectTo: '/'
			});
	});
