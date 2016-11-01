(function() {
    'use strict';
    
    angular.module('app')
        .controller('IndexController', IndexController);

    IndexController.$inject = ['$state'];

    function IndexController($state) {
        var vm = this;
        vm.title = "IndexController";

        vm.state = {};

        activate();

        function activate() {
            vm.state = $state;

            console.log(vm.state);
        }
    }
})()
