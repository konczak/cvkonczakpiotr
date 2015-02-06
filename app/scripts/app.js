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
                    .when('/', {
                        templateUrl: 'views/main.html',
                        controller: 'MainCtrl'
                    })
                    .when('/about', {
                        templateUrl: 'views/about.html',
                        controller: 'AboutCtrl'
                    })
                    .when('/personalDetails', {
                        templateUrl: 'views/personaldetails.html',
                        controller: 'PersonaldetailsCtrl'
                    })
                    .when('/experiences', {
                        templateUrl: 'views/experiences.html',
                        controller: 'ExperiencesCtrl'
                    })
                    .when('/skills', {
                        templateUrl: 'views/skills.html',
                        controller: 'SkillsCtrl'
                    })
                    .when('/education', {
                        templateUrl: 'views/education.html',
                        controller: 'EducationCtrl'
                    })
                    .when('/projects', {
                        templateUrl: 'views/projects.html',
                        controller: 'ProjectsCtrl'
                    })
                    .otherwise({
                        redirectTo: '/'
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