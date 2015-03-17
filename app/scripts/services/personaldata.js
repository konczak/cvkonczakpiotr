'use strict';

/**
 * @ngdoc service
 * @name konczakpiotrcvApp.personalData
 * @description
 * # personalData
 * Factory in the konczakpiotrcvApp.
 */
angular.module('konczakpiotrcvApp')
        .factory('personalData', function ($q, $timeout, $http, localStorageService) {
            // Service logic
            // ...

            // Public API here
            return {
                getPersonalData: function () {
                    var deferred = $q.defer();

                    $timeout(function () {
                        if (localStorageService.isSupported) {
                            var personaldata = localStorageService.get('personaldata');
                            if (personaldata) {
                                deferred.resolve(personaldata);
                            } else {
                                $http.get('data/personaldata.json')
                                        .success(function (data) {
                                            localStorageService.set('personaldata', JSON.stringify(data));
                                            deferred.resolve(data);
                                        });
                            }
                        } else {
                            $http.get('data/personaldata.json')
                                    .success(function (data) {
                                        deferred.resolve(data);
                                    });
                        }
                    }, 30);

                    return deferred.promise;
                }
            };
        });
