'use strict';

/**
 * @ngdoc service
 * @name konczakpiotrcvApp.projects
 * @description
 * # projects
 * Factory in the konczakpiotrcvApp.
 */
angular.module('konczakpiotrcvApp')
        .factory('projects', function ($q, $timeout, $http, localStorageService) {
            // Service logic
            // ...

            // Public API here
            return {
                getProjects: function () {
                    var deferred = $q.defer();

                    $timeout(function () {
                        if (localStorageService.isSupported) {
                            var projects = localStorageService.get('projects');
                            if (projects) {
                                deferred.resolve(projects);
                            } else {
                                $http.get('data/projects.json')
                                        .success(function (data) {
                                            localStorageService.set('projects', JSON.stringify(data.projects));
                                            deferred.resolve(data.projects);
                                        });
                            }
                        } else {
                            $http.get('data/projects.json')
                                    .success(function (data) {
                                        deferred.resolve(data.projects);
                                    });
                        }
                    }, 30);

                    return deferred.promise;
                }
            };
        });
