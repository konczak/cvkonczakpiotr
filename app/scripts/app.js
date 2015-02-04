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
    'ngTouch'
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
      .otherwise({
        redirectTo: '/'
      });
  });
