'use strict';

/**
 * @ngdoc function
 * @name konczakpiotrcvApp.controller:HeadingCtrl
 * @description
 * # HeadingCtrl
 * Controller of the konczakpiotrcvApp
 */
angular.module('konczakpiotrcvApp')
        .controller('HeadingCtrl', function ($rootScope, $scope, $translatePartialLoader, $translate, momentService, metadata) {
            var updatedAt = null;

            $scope.vo = {
                updatedAt: null
            };

            function parseUpdatedAtI18N() {
                $scope.vo.updatedAt = momentService(updatedAt, 'DD/MM/YYYY')
                        .format('dddd, Do MMMM YYYY');
            }

            $rootScope.$on('$translateChangeEnd', function () {
                parseUpdatedAtI18N();
            });

            metadata.getMetadata()
                    .then(function (data) {
                        updatedAt = data.date;
                        parseUpdatedAtI18N();
                    });

            $translatePartialLoader.addPart('heading');
            $translate.refresh();
        });
