'use strict';

/**
 * @ngdoc service
 * @name konczakpiotrcvApp.socialLinks
 * @description
 * # socialLinks
 * Factory in the konczakpiotrcvApp.
 */
angular.module('konczakpiotrcvApp')
        .factory('socialLinks', function ($q, $timeout, $http, localStorageService) {
            // Service logic
            // ...

            // Public API here
            return {
                getSocialLinks: function () {
                    var deferred = $q.defer();

                    $timeout(function () {
                        if (localStorageService.isSupported) {
                            var sociallinks = localStorageService.get('sociallinks');
                            if (sociallinks) {
                                deferred.resolve(sociallinks);
                            } else {
                                $http.get('data/sociallinks.json')
                                        .success(function (data) {
                                            localStorageService.set('sociallinks', JSON.stringify(data));
                                            deferred.resolve(data);
                                        });
                            }
                        } else {
                            $http.get('data/sociallinks.json')
                                    .success(function (data) {
                                        deferred.resolve(data);
                                    });
                        }
                    }, 30);

                    return deferred.promise;
                }
            };
        });
