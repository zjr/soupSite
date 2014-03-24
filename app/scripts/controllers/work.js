'use strict';

angular.module('SoupApp')
  .controller('WorkCtrl', function ($scope) {
    $scope.imgCol = [
        {id: 'p1', 'title': 'A nice day!', src: "http://lorempixel.com/200/200/"},
        {id: 'p2', 'title': 'Puh!', src: "http://lorempixel.com/300/500/"},
        {id: 'p3', 'title': 'What a club!', src: "http://lorempixel.com/800/600/nightlife"},
        {id: 'pX', 'title': 'Some Title', src: 'http://lorempixel.com/220/180'},
        {id: 'pX', 'title': 'Some Title', src: 'http://lorempixel.com/400/400'},
        {id: 'pX', 'title': 'Some Title', src: 'http://lorempixel.com/284/445'},
        {id: 'pX', 'title': 'Some Title', src: 'http://lorempixel.com/235/322'},
        {id: 'pX', 'title': 'Some Title', src: 'http://lorempixel.com/683/534'},
        {id: 'pX', 'title': 'Some Title', src: 'http://lorempixel.com/1000/720'},
        {id: 'pX', 'title': 'Some Title', src: 'http://lorempixel.com/289/300'},
        {id: 'pX', 'title': 'Some Title', src: 'http://lorempixel.com/750/600'},
        {id: 'pX', 'title': 'Some Title', src: 'http://lorempixel.com/683/734'}
    ];
  });
