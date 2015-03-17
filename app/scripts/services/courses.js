'use strict';

/**
 * @ngdoc service
 * @name konczakpiotrcvApp.certificates
 * @description
 * # certificates
 * Factory in the konczakpiotrcvApp.
 */
angular.module('konczakpiotrcvApp')
        .factory('courses', function ($q, $timeout, $http, localStorageService) {
            // Service logic
            // ...

            // Public API here
            return {
                getCourses: function () {
                    var deferred = $q.defer();

                    $timeout(function () {
                        if (localStorageService.isSupported) {
                            var courses = localStorageService.get('courses');
                            if (courses) {
                                deferred.resolve(courses);
                            } else {
                                $http.get('data/courses.json')
                                        .success(function (data) {
                                            localStorageService.set('courses', JSON.stringify(data.courses));
                                            deferred.resolve(data.courses);
                                        });
                            }
                        } else {
                            $http.get('data/courses.json')
                                    .success(function (data) {
                                        deferred.resolve(data.courses);
                                    });
                        }
                    }, 30);

                    return deferred.promise;
                }
            };
        });
