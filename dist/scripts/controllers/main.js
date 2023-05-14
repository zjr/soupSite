'use strict';

angular.module('SoupApp')
	.controller('MainCtrl', function($scope, Data) {
		console.log('Welcome to zjr.io!');

        $scope.data = Data;
	});
