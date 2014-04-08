'use strict';

angular.module('SoupApp')
    .directive('spCenter', function () {
        return {
            link: function postLink(scope, el) {
                var width = el.prop('offsetWidth');
                var height = el.prop('offsetHeight');

                el.css({
                    'margin-left': -(width / 2) + 'px',
                    'margin-top': -(height / 2) + 'px',
                });
            }
        };
    });
