'use strict';

/**
 * @ngdoc function
 * @name konczakpiotrcvApp.controller:FooterCtrl
 * @description
 * # FooterCtrl
 * Controller of the konczakpiotrcvApp
 */
angular.module('konczakpiotrcvApp')
        .controller('FooterCtrl', function ($scope, $translatePartialLoader, $translate, metadata) {
            $scope.vo = {
                version: null
            };

            metadata.getMetadata()
                    .then(function (data) {
                        $scope.vo.version = data.version;
                    });

            $translatePartialLoader.addPart('footer');
            $translate.refresh();
        });
