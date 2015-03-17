'use strict';

/**
 * @ngdoc service
 * @name konczakpiotrcvApp.skills
 * @description
 * # skills
 * Factory in the konczakpiotrcvApp.
 */
angular.module('konczakpiotrcvApp')
        .factory('skills', function ($q, $timeout, $http, localStorageService) {
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

            function addTypesToSkills(skills) {
                angular.forEach(skills, function (value, key) {
                    value.type = findProperType(value.percent);
                });
            }

            // Public API here
            return {
                getMainSkills: function () {
                    var deferred = $q.defer();

                    $timeout(function () {
                        if (localStorageService.isSupported) {
                            var skills = localStorageService.get('skillsmain');
                            if (skills) {
                                deferred.resolve(skills);
                            } else {
                                $http.get('data/skillsmain.json')
                                        .success(function (data) {
                                            var skills = data.skills;
                                            addTypesToSkills(skills);
                                            localStorageService.set('skillsmain', JSON.stringify(skills));
                                            deferred.resolve(skills);
                                        });
                            }
                        } else {
                            $http.get('data/skillsmain.json')
                                    .success(function (data) {
                                        var skills = data.skills;
                                        addTypesToSkills(skills);
                                        deferred.resolve(skills);
                                    });
                        }
                    }, 30);

                    return deferred.promise;
                },
                getOtherSkills: function () {

                    var deferred = $q.defer();

                    $timeout(function () {
                        if (localStorageService.isSupported) {
                            var categories = localStorageService.get('skillsother');
                            if (categories) {
                                deferred.resolve(categories);
                            } else {
                                $http.get('data/skillsother.json')
                                        .success(function (data) {
                                            var categories = data.categories;
                                            angular.forEach(categories, function (value, key) {
                                                addTypesToSkills(value.skills);
                                            });
                                            localStorageService.set('skillsother', JSON.stringify(categories));
                                            deferred.resolve(categories);
                                        });
                            }
                        } else {
                            $http.get('data/skillsother.json')
                                    .success(function (data) {
                                        var categories = data.categories;
                                        angular.forEach(categories, function (value, key) {
                                            addTypesToSkills(value.skills);
                                        });
                                        deferred.resolve(categories);
                                    });
                        }
                    }, 30);

                    return deferred.promise;
                }
            };
        });
