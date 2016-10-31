(function() {
    'use strict';

    angular.module('app')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['$http'];

    function HomeController($http) {
        var vm = this;
        vm.title = "HomeController";

        //variables
        vm.lists = [];

        activate();

        function activate() {
            $http.get('/lists/').then(function(results) {
                vm.lists = results.data;
            });
        }
    }
})()
