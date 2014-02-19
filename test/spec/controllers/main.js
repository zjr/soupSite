'use strict';

describe('Controller: MainCtrl', function () {

	// load the controller's module
	beforeEach(module('SoupApp'));

	var MainCtrl,
		scope;

	// Initialize the controller and a mock scope
	beforeEach(inject(function ($controller, $rootScope) {
		scope = $rootScope.$new();
		MainCtrl = $controller('MainCtrl', {
			$scope: scope
		});
	}));

	it('should have a welcome message?', function () {
		var expectedWelcome = 'Well how d’ye do?  Welcome to ZJR.IO!';
		expect(scope.welcomeMessage).toBe(expectedWelcome);
	});

});
