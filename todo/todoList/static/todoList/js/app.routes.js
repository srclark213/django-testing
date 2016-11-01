(function() {
    'use strict';
    angular.module('app')
        .config(function($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state('home', {
                    url: '/',
                    templateUrl: '/static/todoList/templates/home.html',
                    controller: 'HomeController as vm'
                })
                .state('list', {
                    url: '/list/{listId}',
                    templateUrl: '/static/todoList/templates/list.html',
                    controller: 'ListController as vm'
                });

            $urlRouterProvider.otherwise('/');
        });
})();