'use strict';

angular.module('SoupApp')
    .controller('WorkCtrl', function ($scope, Data) {
        $scope.data = Data;
    });
