'use strict';

describe('Service: personalData', function () {

  // load the service's module
  beforeEach(module('konczakpiotrcvApp'));

  // instantiate service
  var personalData;
  beforeEach(inject(function (_personalData_) {
    personalData = _personalData_;
  }));

  it('should do something', function () {
    expect(!!personalData).toBe(true);
  });

});
