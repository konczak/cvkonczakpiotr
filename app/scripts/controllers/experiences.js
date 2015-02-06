'use strict';

/**
 * @ngdoc function
 * @name konczakpiotrcvApp.controller:ExperiencesCtrl
 * @description
 * # ExperiencesCtrl
 * Controller of the konczakpiotrcvApp
 */
angular.module('konczakpiotrcvApp')
        .controller('ExperiencesCtrl', function ($scope, jobs, projects) {
            $scope.vo = {};
            jobs.getJobs().then(function (data) {
                $scope.vo.jobs = data;
            });

            projects.getProjects().then(function (data) {
                $scope.vo.projects = data;
            });

        });
