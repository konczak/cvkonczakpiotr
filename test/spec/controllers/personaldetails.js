'use strict';

describe('Controller: PersonaldetailsCtrl', function () {

  // load the controller's module
  beforeEach(module('konczakpiotrcvApp'));

  var PersonaldetailsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PersonaldetailsCtrl = $controller('PersonaldetailsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
