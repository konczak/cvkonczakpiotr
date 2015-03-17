'use strict';

/**
 * @ngdoc service
 * @name konczakpiotrcvApp.metadata
 * @description
 * # metadata
 * Service in the konczakpiotrcvApp.
 */
angular.module('konczakpiotrcvApp')
        .factory('metadata', function ($q, $timeout, $http, localStorageService) {
            // Service logic
            // ...

            // Public API here
            return {
                getMetadata: function () {
                    var deferred = $q.defer();

                    $timeout(function () {
                        if (localStorageService.isSupported) {
                            var metadata = localStorageService.get('metadata');
                            if (metadata) {
                                deferred.resolve(metadata);
                            } else {
                                $http.get('data/metadata.json')
                                        .success(function (data) {
                                            localStorageService.set('metadata', JSON.stringify(data));
                                            deferred.resolve(data);
                                        });
                            }
                        } else {
                            $http.get('data/metadata.json')
                                    .success(function (data) {
                                        deferred.resolve(data);
                                    });
                        }
                    }, 30);

                    return deferred.promise;
                }
            };
        });
