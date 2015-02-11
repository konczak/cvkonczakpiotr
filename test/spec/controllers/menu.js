'use strict';

describe('Controller: MenuCtrl', function () {

    // load the controller's module
    beforeEach(module('konczakpiotrcvApp'));

    var MenuCtrl,
            scope,
            location;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope, _$location_) {
        location = _$location_;
        scope = $rootScope.$new();
        MenuCtrl = $controller('MenuCtrl', {
            $scope: scope
        });
    }));

    it('should have a method to check if the path is active', function () {
        location.path('/about');
        expect(location.path()).toBe('/about');
        expect(scope.isActive('/about')).toBe(true);
        expect(scope.isActive('/contact')).toBe(false);
    });
});
