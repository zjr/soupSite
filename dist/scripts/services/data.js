'use strict';

angular.module('SoupApp')
    .factory('Data', function () {
        var Data = {};
        Data.navItems = [
            {
                name: 'About',
                url: 'soup.about',
                icon: 'info',
                isExternal: false
            },
            // {
            //     name: 'Work',
            //     url: 'soup.work',
            //     icon: 'briefcase',
            //     isExternal: false
            // },
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
            }
        ];
        return Data;
    });
