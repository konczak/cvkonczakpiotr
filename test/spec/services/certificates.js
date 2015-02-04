'use strict';

describe('Service: certificates', function () {

  // load the service's module
  beforeEach(module('konczakpiotrcvApp'));

  // instantiate service
  var certificates;
  beforeEach(inject(function (_certificates_) {
    certificates = _certificates_;
  }));

  it('should do something', function () {
    expect(!!certificates).toBe(true);
  });

});
