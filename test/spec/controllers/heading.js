'use strict';

describe('Controller: HeadingCtrl', function () {

    // load the controller's module
    beforeEach(module('konczakpiotrcvApp'));

    var HeadingCtrl,
            scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        HeadingCtrl = $controller('HeadingCtrl', {
            $scope: scope
        });
    }));

    it('should attach vo to scope', function () {
        expect(scope.vo).toBeDefined();
    });
});
