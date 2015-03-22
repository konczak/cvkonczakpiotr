'use strict';

/**
 * @ngdoc function
 * @name konczakpiotrcvApp.controller:MenuCtrl
 * @description
 * # MenuCtrl
 * Controller of the konczakpiotrcvApp
 */
angular.module('konczakpiotrcvApp')
        .controller('MenuCtrl', function ($scope, $location, momentService, $translate, $translatePartialLoader, localStorageService) {
            $scope.isActive = function (route) {
                return route === $location.path();
            };
            var weekInMilis = 604800000;

            if (localStorageService.isSupported) {
                var expiresAt = localStorageService.get('expiresAt');
                if (expiresAt &&
                        (new Date().getTime() - expiresAt.timestamp) > 0) {
                    localStorageService.clearAll();
                } else {
                    var expiration = {timestamp: new Date().getTime() + weekInMilis};
                    localStorageService.set('expiresAt', JSON.stringify(expiration));
                }
            }

            $scope.changeLanguageTo = function (preferedLanguage) {
                momentService.locale(preferedLanguage);
                $translate.use(preferedLanguage);
            };

            $translatePartialLoader.addPart('menu');
            $translate.refresh();

            $scope.isActualLanguage = function (language) {
                return language === $translate.use();
            };
        });
