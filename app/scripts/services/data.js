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
            {
                name: 'Work',
                url: 'soup.work',
                icon: 'briefcase',
                isExternal: false
            },
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

        Data.workItems = [
            {
                id: 1,
                'title': 'Development',
                src: 'http://lorempixel.com/200/200/'
            },
            {
                id: 2,
                'title': 'Design & Development',
                src: 'http://lorempixel.com/300/500/',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum, repudiandae.'
            },
            {
                id: 3,
                'title': 'Photography',
                src: 'http://lorempixel.com/800/600/nightlife'
            },
            {
                id: 4,
                'title': 'Design',
                src: 'http://lorempixel.com/220/180'
            },
            {
                id: 5,
                'title': 'Some Title',
                src: 'http://lorempixel.com/400/400'
            },
            {
                id: 6,
                'title': 'Some Title',
                src: 'http://lorempixel.com/284/445'
            },
            {
                id: 7,
                'title': 'Some Title',
                src: 'http://lorempixel.com/235/322'
            },
            {
                id: 8,
                'title': 'Some Title',
                src: 'http://lorempixel.com/683/534'
            },
            {
                id: 9,
                'title': 'Some Title',
                src: 'http://lorempixel.com/1000/720'
            },
            {
                id: 10,
                'title': 'Some Title',
                src: 'http://lorempixel.com/289/300'
            },
            {
                id: 11,
                'title': 'Some Title',
                src: 'http://lorempixel.com/750/600'
            },
            {
                id: 12,
                'title': 'Some Title',
                src: 'http://lorempixel.com/683/734'
            }
        ];

        return Data;
    });
