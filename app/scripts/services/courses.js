'use strict';

/**
 * @ngdoc service
 * @name konczakpiotrcvApp.certificates
 * @description
 * # certificates
 * Factory in the konczakpiotrcvApp.
 */
angular.module('konczakpiotrcvApp')
        .factory('courses', function ($q, $timeout, $http, $translate, localStorageService) {
            // Service logic
            // ...

            function addI18NSupport(courses) {
                angular.forEach(courses, function (value) {
                    value.name = function () {
                        if ($translate.use() === 'en-gb') {
                            return this.nameEngb;
                        } else if ($translate.use() === 'pl') {
                            return this.namePl;
                        }
                        return '';
                    };
                    value.description = function () {
                        if ($translate.use() === 'en-gb') {
                            return this.descriptionEngb;
                        } else if ($translate.use() === 'pl') {
                            return this.descriptionPl;
                        }
                        return '';
                    };
                });
            }

            // Public API here
            return {
                getCourses: function () {
                    var deferred = $q.defer();

                    $timeout(function () {
                        if (localStorageService.isSupported) {
                            var courses = localStorageService.get('courses');
                            if (courses) {
                                addI18NSupport(courses);
                                deferred.resolve(courses);
                            } else {
                                $http.get('data/courses.json')
                                        .success(function (data) {
                                            addI18NSupport(data.courses);
                                            localStorageService.set('courses', JSON.stringify(data.courses));
                                            deferred.resolve(data.courses);
                                        });
                            }
                        } else {
                            $http.get('data/courses.json')
                                    .success(function (data) {
                                        addI18NSupport(data.courses);
                                        deferred.resolve(data.courses);
                                    });
                        }
                    }, 30);

                    return deferred.promise;
                }
            };
        });
