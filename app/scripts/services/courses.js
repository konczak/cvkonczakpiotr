'use strict';

/**
 * @ngdoc service
 * @name konczakpiotrcvApp.certificates
 * @description
 * # certificates
 * Factory in the konczakpiotrcvApp.
 */
angular.module('konczakpiotrcvApp')
        .factory('courses', function ($q, $timeout, $http) {
            // Service logic
            // ...

            // Public API here
            return {
                getCourses: function () {

                    var deferred = $q.defer();

                    $timeout(function () {
                        $http.get('data/courses.json').success(function (data) {
                            deferred.resolve(data.courses);
                        });
                    }, 30);

                    return deferred.promise;
                }
            };
        });
