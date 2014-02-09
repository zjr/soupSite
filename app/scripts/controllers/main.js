'use strict';

angular.module('BurgyApp')
	.controller('MainCtrl', function ($scope) {
		$scope.welcomeMessage = 'Well how d’ye do?  Welcome to ZJR.IO!';
		console.log($scope.welcomeMessage);
	});
