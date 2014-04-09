'use strict';

angular.module('SoupApp')
    .controller('WorkCtrl', function ($scope, $state, $animate, Data) {
        $scope.data = Data;

        $scope.closeModal = function () {
            var elem = angular.element(document.querySelector('.modal-container'));

            // TODO: this feels so dirty
            $animate.addClass(elem, 'ng-hide', function () {
                $state.go('^');
            });
        };
    });
