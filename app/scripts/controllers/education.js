'use strict';

/**
 * @ngdoc function
 * @name konczakpiotrcvApp.controller:EducationCtrl
 * @description
 * # EducationCtrl
 * Controller of the konczakpiotrcvApp
 */
angular.module('konczakpiotrcvApp')
        .controller('EducationCtrl', function ($scope, courses) {
            $scope.vo = {};
            courses.getCourses().then(function (data) {
                $scope.vo.courses = data;
            });
        });
