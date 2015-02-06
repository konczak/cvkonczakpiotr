'use strict';

/**
 * @ngdoc service
 * @name konczakpiotrcvApp.projects
 * @description
 * # projects
 * Factory in the konczakpiotrcvApp.
 */
angular.module('konczakpiotrcvApp')
        .factory('projects', function ($q, $timeout, $http) {
            // Service logic
            // ...

            // Public API here
            return {
                getProjects: function () {

                    var deferred = $q.defer();

                    $timeout(function () {
                        $http.get('data/projects.json').success(function (data) {
                            deferred.resolve(data.projects);
                        });
                    }, 30);

                    return deferred.promise;
                }
            };
        });
