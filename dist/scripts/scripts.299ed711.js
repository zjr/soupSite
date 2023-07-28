"use strict";angular.module("SoupApp",["ngCookies","ngResource","ngSanitize","ngAnimate","ui.router","akoenig.deckgrid"]),angular.module("SoupApp").run(["$rootScope","$state","$stateParams",function(e,t,i){e.$state=t,e.$stateParams=i}]),angular.module("SoupApp").config(["$urlRouterProvider",function(e){e.otherwise("home")}]),angular.module("SoupApp").config(["$stateProvider",function(e){e.state("soup",{abstract:!0,url:"/",views:{navigation:{templateUrl:"views/navigation.html"}}}).state("soup.home",{url:"home"}).state("soup.about",{url:"about",views:{"main@":{templateUrl:"views/about.html"}}}).state("soup.work",{url:"work",views:{"main@":{templateUrl:"views/work.html"}}})}]),angular.module("SoupApp").factory("Data",function(){var e={navItems:[{name:"About",url:"soup.about",icon:"info",isExternal:!1},{name:"Twitter",url:"//twitter.com/zjrollyson",icon:"twitter",isExternal:!0},{name:"Github",url:"//github.com/zjr",icon:"github",isExternal:!0},{name:"LinkedIn",url:"//linkedin.com/pub/zachary-rollyson/69/587/257",icon:"linkedin",isExternal:!0}]};return e}),angular.module("SoupApp").controller("MainCtrl",["$scope","Data",function(e,t){console.log("Welcome to zjr.io!"),e.data=t}]),angular.module("SoupApp").controller("WorkCtrl",["$scope",function(e){e.imgCol=[{id:"p1",title:"Development",src:"http://lorempixel.com/200/200/"},{id:"p2",title:"Design & Development",src:"http://lorempixel.com/300/500/",desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum, repudiandae."},{id:"p3",title:"Photography",src:"http://lorempixel.com/800/600/nightlife"},{id:"pX",title:"Design",src:"http://lorempixel.com/220/180"},{id:"pX",title:"Some Title",src:"http://lorempixel.com/400/400"},{id:"pX",title:"Some Title",src:"http://lorempixel.com/284/445"},{id:"pX",title:"Some Title",src:"http://lorempixel.com/235/322"},{id:"pX",title:"Some Title",src:"http://lorempixel.com/683/534"},{id:"pX",title:"Some Title",src:"http://lorempixel.com/1000/720"},{id:"pX",title:"Some Title",src:"http://lorempixel.com/289/300"},{id:"pX",title:"Some Title",src:"http://lorempixel.com/750/600"},{id:"pX",title:"Some Title",src:"http://lorempixel.com/683/734"}]}]),angular.module("SoupApp").directive("videoBg",["$window",function(i){return{restrict:"A",replace:!0,scope:{vidSrc:"=videoBg"},template:'<video class="vidBg" autoplay loop></video>',link:function(a,l){function e(){var e,t,i=(e=l[0].canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,""))?"probably"===e?["webm"]:["webm","mp4"]:["mp4"];for(t in i){var o=i[t],o='<source src="'+a.vidSrc+"."+o+'" type="video/'+o+'">';l.append(o)}}var t;i.innerWidth<(t=void 0===t?1024:t)?l.remove():e()}}}]),angular.module("SoupApp").run(["$templateCache",function(e){e.put("views/about.html",'<h2 class="pageTitle">Stuff, things…</h2><br> <p class="bodyGraph">PSA: I made this website in 2014 and haven\'t done anything with it since… below is the original text of this.<br/><br/>Oh, well, hello… welcome to zjr.io. This is what I\'m going to call… the internet space fortquarters of me, Zachary J. Rollyson. I am, among other things not necessarily totally useful to mention herein (this sentence), a web developer &amp; designer. I love various types of explitives out of: animation, real time application development, responsive design, question marks, interrobangs, clean &amp; beautiful code-ings, ellipses, &amp;c.. I also <em>like</em> and work with a whole lot of other things. So if you need a web worker, from server administration to CSS, I have an email address. If you want some portfolio samples, I… have an email address. One day, I\'ll have dedicated pages to those things—probably after that text legibility thing—but for today, I have: <a href="mailto:me@zjr.io">me@zjr.io</a>. That\'s right, I used a `mailto:` link.</p>'),e.put("views/navigation.html",'<a href="#"> <h1 class="siteTitle">zjr.io</h1> </a> <br> <ul class="mainNav"> \x3c!-- TODO: Might not be so good to have switch & repeat on the same el. --\x3e <li class="sLink" ng-class="{ active: $state.is(\'{{ item.url }}\') }" ng-repeat="item in data.navItems" ng-switch="item.isExternal"> <a ng-switch-when="true" target="_blank" ng-href="{{ item.url }}"> <i class="fa fa-{{ item.icon }}"></i> </a> <a ng-switch-when="false" ui-sref="{{ item.url }}"> <i class="fa fa-{{ item.icon }}"></i> </a> <span class="linkTitle">{{ item.name }}</span> <span class="dot-box"><span class="dot"></span></span> </li> </ul>'),e.put("views/partials/workCard.html",'<a data-ui-sref="about" class="work-card"> <div class="work-card__details"> <h2 class="work-card__title">{{card.title}}</h2> <div class="divider"></div> <p class="work-card__desc">{{card.desc}}</p> </div> <img class="work-card__image" data-ng-src="{{card.src}}"> <div class="shadow"></div> </a>'),e.put("views/work.html",'<div data-ng-controller="WorkCtrl"> <div class="deckgrid" deckgrid source="imgCol" cardtemplate="views/partials/workCard.html"></div> </div>')}]);