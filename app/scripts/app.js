'use strict';

angular.module('SoupApp', [
	'ngCookies',
	'ngResource',
	'ngSanitize',
	'ngAnimate',
	'ui.router',
	'akoenig.deckgrid'
]);

angular.module('SoupApp')
    .run(['$rootScope', '$state', '$stateParams', function ($rootScope, $state, $stateParams) {
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;
    }]);