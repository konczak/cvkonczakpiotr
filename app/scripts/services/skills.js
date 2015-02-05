'use strict';

/**
 * @ngdoc service
 * @name konczakpiotrcvApp.skills
 * @description
 * # skills
 * Factory in the konczakpiotrcvApp.
 */
angular.module('konczakpiotrcvApp')
        .factory('skills', function ($q, $timeout, $http) {
            // Service logic
            // ...

            // Public API here
            return {
                getMainSkills: function () {

                    var deferred = $q.defer();

                    $timeout(function () {
                        $http.get('data/skillsmain.json').success(function (data) {
                            deferred.resolve(data.skills);
                        });
                    }, 30);

                    return deferred.promise;
                },
                getOtherSkills: function () {

                    var deferred = $q.defer();

                    $timeout(function () {
                        $http.get('data/skillsother.json').success(function (data) {
                            deferred.resolve(data.categories);
                        });
                    }, 30);

                    return deferred.promise;
                }
            };
        });
