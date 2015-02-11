'use strict';

describe('Service: courses', function () {

  // load the service's module
  beforeEach(module('konczakpiotrcvApp'));

  // instantiate service
  var courses;
  beforeEach(inject(function (_courses_) {
    courses = _courses_;
  }));

  it('should do something', function () {
    expect(!!courses).toBe(true);
  });

});
