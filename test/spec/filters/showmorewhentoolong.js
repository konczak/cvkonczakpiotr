'use strict';

describe('Filter: showMoreWhenTooLong', function () {

  // load the filter's module
  beforeEach(module('konczakpiotrcvApp'));

  // initialize a new instance of the filter before each test
  var showMoreWhenTooLong;
  beforeEach(inject(function ($filter) {
    showMoreWhenTooLong = $filter('showMoreWhenTooLong');
  }));

  it('should return the input prefixed with "showMoreWhenTooLong filter:"', function () {
    var text = 'angularjs';
    expect(showMoreWhenTooLong(text)).toBe('showMoreWhenTooLong filter: ' + text);
  });

});
