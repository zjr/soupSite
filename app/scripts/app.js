'use strict';

angular.module('SoupApp', [
	'ngCookies',
	'ngResource',
	'ngSanitize',
	'ngAnimate',
	'ui.router'
])
	.config(function ($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise('soup');

		$stateProvider
			.state('soup', {
				url: ''
			})
			.state('about', {
				url: '/about',
				templateUrl: 'views/about.html'
			});
	});
