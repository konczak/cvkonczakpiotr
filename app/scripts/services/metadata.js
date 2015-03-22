'use strict';

/**
 * @ngdoc service
 * @name konczakpiotrcvApp.metadata
 * @description
 * # metadata
 * Service in the konczakpiotrcvApp.
 */
angular.module('konczakpiotrcvApp')
        .factory('metadata', function ($q, $timeout, $http) {
            // Service logic
            // ...

            // Public API here
            return {
                getMetadata: function () {
                    var deferred = $q.defer();

                    $timeout(function () {
                        $http.get('data/metadata.json')
                                .success(function (data) {
                                    deferred.resolve(data);
                                });
                    }, 30);

                    return deferred.promise;
                }
            };
        });
