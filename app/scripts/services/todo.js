'use strict';

/**
 * @ngdoc service
 * @name konczakpiotrcvApp.todo
 * @description
 * # todo
 * Factory in the konczakpiotrcvApp.
 */
angular.module('konczakpiotrcvApp')
        .factory('todo', function ($q, $timeout, $http) {
            // Service logic
            // ...

            // Public API here
            return {
                getTodos: function () {

                    var deferred = $q.defer();

                    $timeout(function () {
                        $http.get('data/todo.json').success(function (data) {
                            deferred.resolve(data.todos);
                        });
                    }, 30);

                    return deferred.promise;
                }
            };
        });
