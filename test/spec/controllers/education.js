'use strict';

describe('Controller: EducationCtrl', function () {

  // load the controller's module
  beforeEach(module('konczakpiotrcvApp'));

  var EducationCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EducationCtrl = $controller('EducationCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
