'use strict';

/**
 * @ngdoc function
 * @name konczakpiotrcvApp.controller:ProjectsCtrl
 * @description
 * # ProjectsCtrl
 * Controller of the konczakpiotrcvApp
 */
angular.module('konczakpiotrcvApp')
        .controller('ProjectsCtrl', function ($scope, projects) {
            $scope.vo = {
                projects: projects
            };

        });
