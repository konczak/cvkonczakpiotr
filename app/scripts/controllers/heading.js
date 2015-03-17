'use strict';

/**
 * @ngdoc function
 * @name konczakpiotrcvApp.controller:HeadingCtrl
 * @description
 * # HeadingCtrl
 * Controller of the konczakpiotrcvApp
 */
angular.module('konczakpiotrcvApp')
        .controller('HeadingCtrl', function ($scope, moment, metadata) {
            $scope.vo = {
                updatedAt: null
            };

            metadata.getMetadata()
                    .then(function (data) {
                        $scope.vo.updatedAt = moment.parse(data.date, 'DD/MM/YYYY')
                                .format('dddd, Do MMMM YYYY');
                    });
        });
