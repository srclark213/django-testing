(function() {
    'use strict';
    
    angular.module('app')
        .controller('IndexController', IndexController);

    IndexController.$inject = ['$state'];

    function IndexController($state) {
        var vm = this;
        vm.title = "IndexController";

        activate();

        function activate() {
            console.log($state.get());
        }
    }
})()
