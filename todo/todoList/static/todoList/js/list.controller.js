(function(){
    'use strict';

    var app = angular.module('app')
        .controller('ListController', ListController);

    ListController.$inject = ['$http', '$stateParams', 'ListFactory', '$q'];

    function ListController($http, $stateParams,ListFactory, $q) {
        var vm = this;
        vm.title = "ListController";

        //variables
        vm.list = {};
        vm.items = [];

        activate();

        function activate() {
            var promises = [];
            ListFactory.getList($stateParams.listId).then(function(data) {
                vm.list = data[0];
            });

            ListFactory.getListItems($stateParams.listId).then(function(data) {
                vm.items = data;
            });
        }
    }
})()