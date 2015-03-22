'use strict';

describe('Service: customStorage', function () {

  // load the service's module
  beforeEach(module('konczakpiotrcvApp'));

  // instantiate service
  var customStorage;
  beforeEach(inject(function (_customStorage_) {
    customStorage = _customStorage_;
  }));

  it('should do something', function () {
    expect(!!customStorage).toBe(true);
  });

});
