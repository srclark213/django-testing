(function(){
    'use strict';

    var app = angular.module('app')
        .controller('listController', listController);

    listController.$inject = ['$http'];

    function listController($http) {
        var vm = this;
        vm.title = "List Controller";

        //variables
        vm.lists = [];

        //functions
        vm.loadList = loadList;

        activate();

        function activate() {
            $http.get('/lists/').then(function(results) {
                vm.lists = results.data;
            });
        }

        function loadList(pk) {
            $http.get('lists/'+pk).then(function(results) {
                vm.list = results.data;
            })
        }
    }
})()