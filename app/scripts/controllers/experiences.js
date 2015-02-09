'use strict';

/**
 * @ngdoc function
 * @name konczakpiotrcvApp.controller:ExperiencesCtrl
 * @description
 * # ExperiencesCtrl
 * Controller of the konczakpiotrcvApp
 */
angular.module('konczakpiotrcvApp')
        .controller('ExperiencesCtrl', function ($scope, jobs) {
            $scope.vo = {
                jobs: jobs
            };

        });
