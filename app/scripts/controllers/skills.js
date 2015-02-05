'use strict';

/**
 * @ngdoc function
 * @name konczakpiotrcvApp.controller:SkillsCtrl
 * @description
 * # SkillsCtrl
 * Controller of the konczakpiotrcvApp
 */
angular.module('konczakpiotrcvApp')
        .controller('SkillsCtrl', function ($scope, skills) {
            $scope.vo = {};

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


            skills.getMainSkills().then(function (data) {
                $scope.vo.mainSkills = data;
                angular.forEach($scope.vo.mainSkills, function (value, key) {
                    value.type = findProperType(value.percent);
                });
            });

            skills.getOtherSkills().then(function (data) {
                $scope.vo.categories = data;
                angular.forEach($scope.vo.categories, function (value, key) {

                    angular.forEach(value.skills, function (value, key) {
                        value.type = findProperType(value.percent);
                    });
                });
            });

            $scope.vo.showOthers = false;
        });
