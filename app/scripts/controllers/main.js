'use strict';

/**
 * @ngdoc function
 * @name konczakpiotrcvApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the konczakpiotrcvApp
 */
angular.module('konczakpiotrcvApp')
        .controller('MainCtrl', function ($scope, personalData, socialLinks, courses, jobs, mainSkills, categories) {
            $scope.vo = {
                personalData: personalData,
                socialLinks: socialLinks,
                courses: courses,
                jobs: jobs,
                mainSkills: mainSkills,
                categories: categories,
                showOthers: false
            };
        });
