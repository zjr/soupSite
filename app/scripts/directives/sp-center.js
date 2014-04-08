'use strict';

angular.module('SoupApp')
    .directive('spCenter', function ($window) {
        return {
            link: function postLink(scope, elem) {

                function getElemDimensions() {
                    scope.offset = {};
                    scope.offset.x = elem.prop('offsetWidth');
                    scope.offset.y = elem.prop('offsetHeight');
                }

                function setElemMargins() {
                    elem.css({
                        'margin-left': -(scope.offset.x / 2) + 'px',
                        'margin-top': -(scope.offset.y / 2) + 'px',
                    });
                }

                scope.$watch(function(){ return scope.offset; }, function(newVal) {
                    if (!newVal) {
                        getElemDimensions();
                    }
                    setElemMargins();
                });

                angular.element($window).on('resize', function() {
                    getElemDimensions();
                    scope.$apply();
                });
            }
        };
    });
