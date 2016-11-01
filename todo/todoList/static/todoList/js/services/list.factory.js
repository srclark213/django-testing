(function() {
    'use strict';

    angular.module('app')
        .factory('ListFactory', ListFactory);

    ListFactory.$inject = ['$http', '$q'];

    function ListFactory($http, $q) {
        return {
            getAllLists: getAllLists,
            getList: getList,
            getListItems: getListItems
        }

        function getAllLists() {
            return $http.get('/lists/').then(function(results) {
                return results.data
            });
        }

        function getList(listId) {
            return $http.get('/lists/'+listId).then(function(results) {
                return results.data;
            });
        }

        function getListItems(listId) {
            return $http.get('/lists/'+listId+"/items").then(function(results) {
                return results.data;
            });
        }
    }
})()