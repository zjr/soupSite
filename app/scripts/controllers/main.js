'use strict';

angular.module('SoupApp')
	.controller('MainCtrl', function ($scope) {
		$scope.welcomeMessage = 'Well how d’ye do?  Welcome to ZJR.IO!';
		console.log($scope.welcomeMessage);
	});
