'use strict';

/**
 * @ngdoc overview
 * @name konczakpiotrcvApp
 * @description
 * # konczakpiotrcvApp
 *
 * Main module of the application.
 */
angular.module('konczakpiotrcvApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'LocalStorageModule',
    'pascalprecht.translate',
    'ui.bootstrap',
    'ngAnimate-animate.css'])
        .config(function ($routeProvider) {
            $routeProvider
                    .when('/allInOnePage', {
                        templateUrl: 'views/main.html',
                        controller: 'MainCtrl',
                        resolve: {
                            personalData: function (personalData) {
                                return personalData.getPersonalData();
                            },
                            socialLinks: function (socialLinks) {
                                return socialLinks.getSocialLinks();
                            },
                            courses: function (courses) {
                                return courses.getCourses();
                            },
                            jobs: function (jobs) {
                                return jobs.getJobs();
                            },
                            mainSkills: function (skills) {
                                return skills.getMainSkills();
                            },
                            categories: function (skills) {
                                return skills.getOtherSkills();
                            },
                            projects: function (projects) {
                                return projects.getProjects();
                            },
                            todos: function (todo) {
                                return todo.getTodos();
                            },
                            allInOnePagePartialLoader: function ($translate, $translatePartialLoader) {
                                $translatePartialLoader.addPart('personalDetails');
                                $translatePartialLoader.addPart('experiences');
                                $translatePartialLoader.addPart('skills');
                                $translatePartialLoader.addPart('education');
                                $translatePartialLoader.addPart('projects');
                                $translatePartialLoader.addPart('todo');
                                return $translate.refresh();
                            }
                        }
                    })
                    .when('/personalDetails', {
                        templateUrl: 'views/personaldetails.html',
                        controller: 'PersonaldetailsCtrl',
                        resolve: {
                            personalData: function (personalData) {
                                return personalData.getPersonalData();
                            },
                            socialLinks: function (socialLinks) {
                                return socialLinks.getSocialLinks();
                            },
                            personalDetailsPartialLoader: function ($translate, $translatePartialLoader) {
                                $translatePartialLoader.addPart('personalDetails');
                                return $translate.refresh();
                            }
                        }
                    })
                    .when('/experiences', {
                        templateUrl: 'views/experiences.html',
                        controller: 'ExperiencesCtrl',
                        resolve: {
                            jobs: function (jobs) {
                                return jobs.getJobs();
                            },
                            experiencesPartialLoader: function ($translate, $translatePartialLoader) {
                                $translatePartialLoader.addPart('experiences');
                                return $translate.refresh();
                            }
                        }
                    })
                    .when('/skills', {
                        templateUrl: 'views/skills.html',
                        controller: 'SkillsCtrl',
                        resolve: {
                            mainSkills: function (skills) {
                                return skills.getMainSkills();
                            },
                            categories: function (skills) {
                                return skills.getOtherSkills();
                            },
                            skillsPartialLoader: function ($translate, $translatePartialLoader) {
                                $translatePartialLoader.addPart('skills');
                                return $translate.refresh();
                            }
                        }
                    })
                    .when('/education', {
                        templateUrl: 'views/education.html',
                        controller: 'EducationCtrl',
                        resolve: {
                            courses: function (courses) {
                                return courses.getCourses();
                            },
                            educationPartialLoader: function ($translate, $translatePartialLoader) {
                                $translatePartialLoader.addPart('education');
                                return $translate.refresh();
                            }
                        }
                    })
                    .when('/projects', {
                        templateUrl: 'views/projects.html',
                        controller: 'ProjectsCtrl',
                        resolve: {
                            projects: function (projects) {
                                return projects.getProjects();
                            },
                            projectsPartialLoader: function ($translate, $translatePartialLoader) {
                                $translatePartialLoader.addPart('projects');
                                return $translate.refresh();
                            }
                        }
                    })
                    .when('/todo', {
                        templateUrl: 'views/todo.html',
                        controller: 'TodoCtrl',
                        resolve: {
                            todos: function (todo) {
                                return todo.getTodos();
                            },
                            todoPartialLoader: function ($translate, $translatePartialLoader) {
                                $translatePartialLoader.addPart('todo');
                                return $translate.refresh();
                            }
                        }
                    })
                    .otherwise({
                        redirectTo: '/personalDetails'
                    });
        })
        .config(function (localStorageServiceProvider) {
            localStorageServiceProvider
                    .setPrefix('konczakpiotrcv');
        })
        .config(function ($translateProvider) {
            $translateProvider.useLoader('$translatePartialLoader', {
                urlTemplate: 'i18n/{lang}/{part}.json'
            });

            $translateProvider.preferredLanguage('en-gb');
            $translateProvider.useStorage('customStorage');
        })
        .run(['$rootScope', function ($root) {
                $root.$on('$routeChangeStart', function (event, next, current) {
                    // Show a loading message until promises are not resolved
                    $root.loadingView = true;
                });
                $root.$on('$routeChangeSuccess', function (event, next, current) {
                    // Hide loading message
                    $root.loadingView = false;
                });
            }]);