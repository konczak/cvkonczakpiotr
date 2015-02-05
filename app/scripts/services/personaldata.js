'use strict';

/**
 * @ngdoc service
 * @name konczakpiotrcvApp.personalData
 * @description
 * # personalData
 * Factory in the konczakpiotrcvApp.
 */
angular.module('konczakpiotrcvApp')
        .factory('personalData', function ($q, $timeout, $http) {
            // Service logic
            // ...

            // Public API here
            return {
                getPersonalData: function () {

                    var deferred = $q.defer();

                    $timeout(function () {
                        $http.get('data/personaldata.json').success(function (data) {
                            deferred.resolve(data);
                        });
                    }, 30);

                    return deferred.promise;
                }
            };
        });
