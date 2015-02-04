'use strict';

/**
 * @ngdoc function
 * @name konczakpiotrcvApp.controller:MenuCtrl
 * @description
 * # MenuCtrl
 * Controller of the konczakpiotrcvApp
 */
angular.module('konczakpiotrcvApp')
        .controller('MenuCtrl', function ($scope, $location) {
            $scope.isActive = function (viewLocation) {
                return viewLocation === $location.path();
            };
        });
