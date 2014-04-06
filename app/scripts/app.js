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

angular.module('SoupApp')
    .factory('LoDash', function($window){
        var _ = $window._;

        return _;
    });

angular.module('SoupApp')
    .factory('_', function(LoDash){
        return LoDash;
    });
