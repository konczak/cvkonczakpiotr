'use strict';

describe('Filter: showMoreWhenTooLong', function () {

    // load the filter's module
    beforeEach(module('konczakpiotrcvApp'));

    // initialize a new instance of the filter before each test
    var showMoreWhenTooLong;
    beforeEach(inject(function ($filter) {
        showMoreWhenTooLong = $filter('showMoreWhenTooLong');
    }));

    it('should return the input when not force execution', function () {
        var text = 'angularjs';
        expect(showMoreWhenTooLong(text)).toBe(text);
    });

    it('should return the input when wordwise', function () {
        var text = 'angularjs is awesome';
        expect(showMoreWhenTooLong(text, true, true, 15)).toBe('angularjs is...');
    });

    it('should return the input long as specified max', function () {
        var text = 'angularjs is awesome';
        expect(showMoreWhenTooLong(text, true, false, 15)).toBe('angularjs is aw...');
    });

    it('should return the input with specified tail when is longer than max', function () {
        var text = 'angularjsis is awesome';
        expect(showMoreWhenTooLong(text, true, false, 15, '*****')).toBe('angularjsis is *****');
    });

});
