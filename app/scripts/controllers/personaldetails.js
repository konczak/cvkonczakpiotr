'use strict';

/**
 * @ngdoc function
 * @name konczakpiotrcvApp.controller:PersonaldetailsCtrl
 * @description
 * # PersonaldetailsCtrl
 * Controller of the konczakpiotrcvApp
 */
angular.module('konczakpiotrcvApp')
        .controller('PersonaldetailsCtrl', function ($scope, personalData, socialLinks) {
            $scope.vo = {};
            personalData.getPersonalData().then(function (data) {
                $scope.vo.personalData = data;
            });

            socialLinks.getSocialLinks().then(function (data) {
                $scope.vo.socialLinks = data;
            });

        });
