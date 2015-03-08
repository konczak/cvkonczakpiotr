'use strict';

/**
 * @ngdoc function
 * @name konczakpiotrcvApp.controller:TodoCtrl
 * @description
 * # TodoCtrl
 * Controller of the konczakpiotrcvApp
 */
angular.module('konczakpiotrcvApp')
        .controller('TodoCtrl', function ($scope, todos) {
            $scope.vo = {
                todos: todos
            };
        });
