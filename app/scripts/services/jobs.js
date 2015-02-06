'use strict';

/**
 * @ngdoc service
 * @name konczakpiotrcvApp.jobs
 * @description
 * # jobs
 * Factory in the konczakpiotrcvApp.
 */
angular.module('konczakpiotrcvApp')
        .factory('jobs', function ($q, $timeout, $http) {
            // Service logic
            // ...

            // Public API here
            return {
                getJobs: function () {

                    var deferred = $q.defer();

                    $timeout(function () {
                        $http.get('data/jobs.json').success(function (data) {
                            deferred.resolve(data.jobs);
                        });
                    }, 30);

                    return deferred.promise;
                }
            };
        });
