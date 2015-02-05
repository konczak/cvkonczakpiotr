'use strict';

describe('Service: socialLinks', function () {

  // load the service's module
  beforeEach(module('konczakpiotrcvApp'));

  // instantiate service
  var socialLinks;
  beforeEach(inject(function (_socialLinks_) {
    socialLinks = _socialLinks_;
  }));

  it('should do something', function () {
    expect(!!socialLinks).toBe(true);
  });

});
