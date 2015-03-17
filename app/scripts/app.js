'use strict';

/**
 * @ngdoc overview
 * @name konczakpiotrcvApp
 * @description
 * # konczakpiotrcvApp
 *
 * Main module of the application.
 */
angular
        .module('konczakpiotrcvApp', [
            'ngAnimate',
            'ngCookies',
            'ngResource',
            'ngRoute',
            'ngSanitize',
            'ngTouch',
            'ui.bootstrap',
            'ngAnimate-animate.css'
        ])
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
                            }
                        }
                    })
                    .when('/experiences', {
                        templateUrl: 'views/experiences.html',
                        controller: 'ExperiencesCtrl',
                        resolve: {
                            jobs: function (jobs) {
                                return jobs.getJobs();
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
                            }
                        }
                    })
                    .when('/education', {
                        templateUrl: 'views/education.html',
                        controller: 'EducationCtrl',
                        resolve: {
                            courses: function (courses) {
                                return courses.getCourses();
                            }
                        }
                    })
                    .when('/projects', {
                        templateUrl: 'views/projects.html',
                        controller: 'ProjectsCtrl',
                        resolve: {
                            projects: function (projects) {
                                return projects.getProjects();
                            }
                        }
                    })
                    .when('/todo', {
                        templateUrl: 'views/todo.html',
                        controller: 'TodoCtrl',
                        resolve: {
                            todos: function (todo) {
                                return todo.getTodos();
                            }
                        }
                    })
                    .otherwise({
                        redirectTo: '/personalDetails'
                    });
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