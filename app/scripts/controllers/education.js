'use strict';

/**
 * @ngdoc function
 * @name konczakpiotrcvApp.controller:EducationCtrl
 * @description
 * # EducationCtrl
 * Controller of the konczakpiotrcvApp
 */
angular.module('konczakpiotrcvApp')
        .controller('EducationCtrl', function ($scope, $translate, courses) {
            $scope.vo = {
                courses: courses,
                actualLanguage: $translate.use()
            };

        });
