(function(){
    'use strict';

    var app = angular.module('app')
        .controller('ListController', ListController);

    ListController.$inject = ['$http', '$stateParams'];

    function ListController($http, $stateParams) {
        var vm = this;
        vm.title = "ListController";

        vm.list = {};

        activate();

        function activate() {
            $http.get('lists/'+$stateParams.listId).then(function(results) {
                vm.list = results.data[0];

                console.log(vm.list);
            })
        }
    }
})()