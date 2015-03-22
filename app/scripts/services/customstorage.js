'use strict';

/**
 * @ngdoc service
 * @name konczakpiotrcvApp.customStorage
 * @description
 * # customStorage
 * Factory in the konczakpiotrcvApp.
 */
angular.module('konczakpiotrcvApp')
        .factory('customStorage', function ($cookies) {
            // Service logic
            // ...

            // Public API here
            return {
                put: function (name, value) {
                    // store `value` under `name` somehow
                    $cookies.NG_TRANSLATE_LANG_KEY = value;
                },
                get: function (name) {
                    // request value of `name` somehow
                    return $cookies.NG_TRANSLATE_LANG_KEY;
                }
            };
        });
