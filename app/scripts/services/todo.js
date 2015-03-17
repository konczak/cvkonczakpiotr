'use strict';

/**
 * @ngdoc service
 * @name konczakpiotrcvApp.todo
 * @description
 * # todo
 * Factory in the konczakpiotrcvApp.
 */
angular.module('konczakpiotrcvApp')
        .factory('todo', function ($q, $timeout, $http, localStorageService) {
            // Service logic
            // ...

            // Public API here
            return {
                getTodos: function () {
                    var deferred = $q.defer();

                    $timeout(function () {
                        if (localStorageService.isSupported) {
                            var todos = localStorageService.get('todos');
                            if (todos) {
                                deferred.resolve(todos);
                            } else {
                                $http.get('data/todo.json')
                                        .success(function (data) {
                                            localStorageService.set('todos', JSON.stringify(data.todos));
                                            deferred.resolve(data.todos);
                                        });
                            }
                        } else {
                            $http.get('data/todo.json')
                                    .success(function (data) {
                                        deferred.resolve(data.todos);
                                    });
                        }
                    }, 30);

                    return deferred.promise;
                }
            };
        });
