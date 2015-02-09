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
            function findProperType(percent) {
                if (percent >= 75) {
                    return 'success';
                } else if (percent >= 50) {
                    return 'info';
                } else if (percent >= 25) {
                    return 'warning';
                }
                return 'danger';
            }

            // Public API here
            return {
                getMainSkills: function () {

                    var deferred = $q.defer();

                    $timeout(function () {
                        $http.get('data/skillsmain.json').success(function (data) {
                            var skills = data.skills;

                            angular.forEach(skills, function (value, key) {
                                value.type = findProperType(value.percent);
                            });

                            deferred.resolve(skills);
                        });
                    }, 30);

                    return deferred.promise;
                },
                getOtherSkills: function () {

                    var deferred = $q.defer();

                    $timeout(function () {
                        $http.get('data/skillsother.json').success(function (data) {
                            var categories = data.categories;
                            angular.forEach(categories, function (value, key) {
                                angular.forEach(value.skills, function (value, key) {
                                    value.type = findProperType(value.percent);
                                });
                            });

                            deferred.resolve(categories);
                        });
                    }, 30);

                    return deferred.promise;
                }
            };
        });
