'use strict';

/**
 * @ngdoc filter
 * @name konczakpiotrcvApp.filter:showMoreWhenTooLong
 * @function
 * @description
 * # showMoreWhenTooLong
 * Filter in the konczakpiotrcvApp.
 */
angular.module('konczakpiotrcvApp')
        .filter('showMoreWhenTooLong', function () {
            //http://stackoverflow.com/a/18096071/3997870
            return function (value, execute, wordwise, max, tail) {
                if (!value)
                    return '';
                if (!execute)
                    return value;

                max = parseInt(max, 10);
                if (!max)
                    return value;
                if (value.length <= max)
                    return value;

                value = value.substr(0, max);
                if (wordwise) {
                    var lastspace = value.lastIndexOf(' ');
                    if (lastspace != -1) {
                        value = value.substr(0, lastspace);
                    }
                }

                return value + (tail || ' …');
            };
        });
