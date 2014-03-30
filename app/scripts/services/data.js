'use strict';

angular.module('SoupApp')
    .factory('Data', function () {
        var Data = {};
        Data.navItems = [
            {
                name: 'Twitter',
                url: '//twitter.com/zjrollyson',
                icon: 'twitter',
                isExternal: true
            },
            {
                name: 'Github',
                url: '//github.com/zjr',
                icon: 'github',
                isExternal: true
            },
            {
                name: 'LinkedIn',
                url: '//linkedin.com/pub/zachary-rollyson/69/587/257',
                icon: 'linkedin',
                isExternal: true
            },
            {
                name: 'Work',
                url: 'work',
                icon: 'briefcase',
                isExternal: false
            },
            {
                name: 'About',
                url: 'about',
                icon: 'question',
                isExternal: false
            }
        ];
        return Data;
    });
