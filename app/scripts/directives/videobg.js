'use strict';

angular.module('SoupApp')
    .directive('videoBg', function () {
        return {
            restrict: 'A',
            replace: true,
            scope: {
                vidSrc: "=videoBg"
            },
            template: '<video class="vidBg" autoplay loop></video>',
            link: function postLink(scope, elem, attrs) {

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

                (function loadSource() {
                    var formats = getFormat();

                    for(var i in formats) {
                        var format = formats[i];
                        var sourceElem = '<source src="' + scope.vidSrc + '.' + format + '" type="video/' + format + '">';
                        elem.append(sourceElem);
                    }
                })();
            }
        };
    });
