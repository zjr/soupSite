'use strict';

angular.module('SoupApp')
    .controller('WorkCtrl', function ($scope, Data) {
        $scope.workItems = Data.workItems;
    });
