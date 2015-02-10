'use strict';

/**
 * @ngdoc function
 * @name konczakpiotrcvApp.controller:NavigationCtrl
 * @description
 * # NavigationCtrl
 * Controller of the konczakpiotrcvApp
 */
angular.module('konczakpiotrcvApp')
        .controller('NavigationCtrl', function ($scope, $location) {
            $scope.vo = {};

            var list = ['/personalDetails',
                '/education',
                '/experiences',
                '/projects',
                '/skills',
                '/allInOnePage'];

            function hasPrevious() {
                var indexInList = list.indexOf($location.path());
                if (indexInList <= 0
                        || indexInList >= list.length) {
                    return false;
                }
                return true;
            }

            function hasNext() {
                var indexInList = list.indexOf($location.path());
                if (indexInList < 0
                        || indexInList >= (list.length - 1)) {
                    return false;
                }
                return true;
            }

            function openPrevious() {
                var indexInList = list.indexOf($location.path());
                if (indexInList < 0
                        || indexInList >= list.length) {
                    return;
                }
                if (indexInList === 0) {
                    indexInList = list.length - 1;
                } else {
                    indexInList--;
                }

                $location.path(list[indexInList]);
            }

            function openNext() {
                var indexInList = list.indexOf($location.path());
                if (indexInList < 0
                        || indexInList >= list.length) {
                    return;
                }
                if (indexInList === (list.length - 1)) {
                    indexInList = 0;
                } else {
                    indexInList++;
                }

                $location.path(list[indexInList]);
            }

            $scope.vo.openPrevious = openPrevious;
            $scope.vo.openNext = openNext;
            $scope.vo.hasPrevious = hasPrevious;
            $scope.vo.hasNext = hasNext;
        });
