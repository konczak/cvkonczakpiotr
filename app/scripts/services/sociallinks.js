'use strict';

/**
 * @ngdoc service
 * @name konczakpiotrcvApp.socialLinks
 * @description
 * # socialLinks
 * Factory in the konczakpiotrcvApp.
 */
angular.module('konczakpiotrcvApp')
        .factory('socialLinks', function ($q, $timeout, $http) {
            // Service logic
            // ...

            // Public API here
            return {
                getSocialLinks: function () {

                    var deferred = $q.defer();

                    $timeout(function () {
                        $http.get('data/sociallinks.json').success(function (data) {
                            deferred.resolve(data);
                        });
                    }, 30);

                    return deferred.promise;
                }
            };
        });
