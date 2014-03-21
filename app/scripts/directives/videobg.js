'use strict';

angular.module('SoupApp')
    .directive('videoBg', ['$window', function ($window) {
        return {
            restrict: 'A',
            replace: true,
            scope: {
                vidSrc: "=videoBg"
            },
            template: '<video class="vidBg" autoplay loop></video>',
            link: function postLink(scope, elem) {

                function getFormat() {
                    var supportsWebm = elem[0].canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,'');

                    if(!supportsWebm) {
                        return ['mp4'];
                    } else if (supportsWebm === 'probably') {
                        return ['webm'];
                    } else {
                        return ['webm', 'mp4'];
                    }
                }

                function isSmallScreen(breakPoint) {
                    var breakPointDefault = 1024;
                    var breakPoint = typeof(breakPoint) === 'undefined' ? breakPointDefault : breakPoint;
                    var winWidth = $window.innerWidth;

                    if (winWidth < breakPoint) {
                        return true;
                    } else {
                        return false;
                    }
                }

                function loadSource() {
                    var formats = getFormat();

                    for(var i in formats) {
                        var format = formats[i];
                        var sourceElem = '<source src="' + scope.vidSrc + '.' + format + '" type="video/' + format + '">';
                        elem.append(sourceElem);
                    }
                };

                (function() {
                    if(!isSmallScreen()) {
                        loadSource();
                    } else {
                        elem.remove();
                    }
                })();
            }
        };
    }]);
