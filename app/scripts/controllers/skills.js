'use strict';

/**
 * @ngdoc function
 * @name konczakpiotrcvApp.controller:SkillsCtrl
 * @description
 * # SkillsCtrl
 * Controller of the konczakpiotrcvApp
 */
angular.module('konczakpiotrcvApp')
        .controller('SkillsCtrl', function ($scope, mainSkills, categories) {
            $scope.vo = {
                mainSkills: mainSkills,
                categories: categories,
                showOthers: false
            };

        });
