'use strict';

/**
 * @ngdoc service
 * @name konczakpiotrcvApp.jobs
 * @description
 * # jobs
 * Factory in the konczakpiotrcvApp.
 */
angular.module('konczakpiotrcvApp')
        .factory('jobs', function ($q, $timeout, $http, localStorageService) {
            // Service logic
            // ...

            // Public API here
            return {
                getJobs: function () {
                    var deferred = $q.defer();

                    $timeout(function () {
                        if (localStorageService.isSupported) {
                            var jobs = localStorageService.get('jobs');
                            if (jobs) {
                                deferred.resolve(jobs);
                            } else {
                                $http.get('data/jobs.json')
                                        .success(function (data) {
                                            localStorageService.set('jobs', JSON.stringify(data.jobs));
                                            deferred.resolve(data.jobs);
                                        });
                            }
                        } else {
                            $http.get('data/jobs.json')
                                    .success(function (data) {
                                        deferred.resolve(data.jobs);
                                    });
                        }
                    }, 30);

                    return deferred.promise;
                }
            };
        });
