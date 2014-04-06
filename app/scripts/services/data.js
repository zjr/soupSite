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

        Data.workItems = [
            {
                id: 'p1',
                'title': 'Development',
                src: 'http://lorempixel.com/200/200/'
            },
            {
                id: 'p2',
                'title': 'Design & Development',
                src: 'http://lorempixel.com/300/500/',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum, repudiandae.'
            },
            {
                id: 'p3',
                'title': 'Photography',
                src: 'http://lorempixel.com/800/600/nightlife'
            },
            {
                id: 'pX',
                'title': 'Design',
                src: 'http://lorempixel.com/220/180'
            },
            {
                id: 'pX',
                'title': 'Some Title',
                src: 'http://lorempixel.com/400/400'
            },
            {
                id: 'pX',
                'title': 'Some Title',
                src: 'http://lorempixel.com/284/445'
            },
            {
                id: 'pX',
                'title': 'Some Title',
                src: 'http://lorempixel.com/235/322'
            },
            {
                id: 'pX',
                'title': 'Some Title',
                src: 'http://lorempixel.com/683/534'
            },
            {
                id: 'pX',
                'title': 'Some Title',
                src: 'http://lorempixel.com/1000/720'
            },
            {
                id: 'pX',
                'title': 'Some Title',
                src: 'http://lorempixel.com/289/300'
            },
            {
                id: 'pX',
                'title': 'Some Title',
                src: 'http://lorempixel.com/750/600'
            },
            {
                id: 'pX',
                'title': 'Some Title',
                src: 'http://lorempixel.com/683/734'
            }
        ];

        return Data;
    });
